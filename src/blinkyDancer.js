var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.oldStep = this.step;
};

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

