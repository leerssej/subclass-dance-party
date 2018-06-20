$(document).ready(function () {
  window.dancers = [];
  window.dancersX = [];
  window.dancersY = [];
  distArr = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    dancers.push(dancer.$node);
    dancersY.push(Math.floor(dancer.top));
    dancersX.push(Math.floor(dancer.left));
  });

  $(".LineUpDancers").on('click', function() {
    window.dancers.forEach(element => element.css("top", "70%"));
  });
  
  // add magenta skirt on mouseover
  $("body").on('mouseover', ".special", function(e) {
    $(".special").css("border", "10px solid darkmagenta");
  });
  
  var findClosest = function() {
    var closest = null;
    for (var i = 0; i < window.dancers.length; i++) {
      dancerTop1 = window.dancers[i]._top;
      dancerLeft1 = window.dancers[i]._left;
      for (var j = 0; j < window.dancers.length; j++) {
        dancerTop2 = window.dancers[j]._top;
        dancerLeft2 = window.dancers[j]._left;
        var distanceTop = Math.abs(dancerTop1 - dancerTop2);
        var distanceLeft = Math.abs(dancerLeft1 - dancerLeft2);
        var distance = Math.sqrt((distanceTop * distanceTop) + (distanceLeft * distanceLeft));
        if (closest = null) {
          closest = distance;
        } else if (distance < closest) {
          closest = distance;
        }
      }
    }
    return closest;
  };
  // console.log(findClosest(window.dancers));

  // dancersX = [324, 783, 415, 75];
  // dancersY = [555, 454, 638, 480];

  var findDist = function (dancersX, dancersY) {
    for (let i = 0; i < dancersX.length; i++) {
      // console.log(dancersX)
      for (let j = 0; j < dancersY.length; j++) {
        let Xsqr = Math.pow(dancersX[i] - dancersX[j], 2);
        let Ysqr = Math.pow(dancersY[i] - dancersY[j], 2);
        let dist = Math.sqrt(Xsqr + Ysqr);
        let label = i;
        // console.log(dist);
        distArr.push([Math.floor(dist), label]);
      }
    }
    return distArr;
  };

  // findDist(dancersX, dancersY);

  var find3Shortest = function (distArr) {
    let sortedArr = distArr.sort((a, b) => a[0] - b[0]);
    let nonZero = sortedArr
      .filter(element => element[0] !== 0)
      .map(element => element[1]);
    // console.log(nonZero);
    let least3 = Array.from(new Set(nonZero)).slice(0, 3);
    return least3;
  };
  
  // move the blue dancers around
  $("body").on('click', ".spin", function() {
    $(".spin").animate({left: 300, top: 100})
      .animate({left: 800, top: 500});
  });
  
  // move the three closest dancers
  $(".chaperone").on('click', function () {
    findDist(dancersX, dancersY);
    let closest = find3Shortest(distArr);
    let closestArr = [window.dancers[closest[0]], window.dancers[closest[1]], window.dancers[closest[2]]];
    console.log(closestArr);
    // $(".spin").animate({ left: 300, top: 100 })
    // .animate({ left: 800, top: 500 });
    
    console.log(find3Shortest(distArr));
    closestArr.forEach((element, i) => {
      element.css("top", "20px");
      element.css("left", `${i*400}px`);
    });
  });   
});
    



