$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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
  });

  $(".LineUpDancers").on('click', function() {
    window.dancers.forEach(element => element.css("top", "70%"));
  });
  
  // add magenta skirt on mouseover
  $("body").on('mouseover', ".special", function(e) {
    $(".special").css("border", "100px solid darkmagenta");
  });
  
  $("body").on('click', ".dancer", function(e) {
    // $('.dancer').css({animation: rotation 2s linear 0s infinite});
    // window.dancers.forEach(); 

    console.log(e.target.closest(".dancer"));
    // if(e.target.closest(".dancer")) {
      
    // $(".dancer").html("clicked: " + event.target.nodeName);
    // console.log($(".dancer").css("border", "100px solid darkmagenta"));
    // }
    // window.dancers.forEach(element => element.css("top", "70%"));
    // console.log(window.dancers);
  });

});




