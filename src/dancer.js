
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step, timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
};

// makeDancer.prototype.constructor = makeDancer;