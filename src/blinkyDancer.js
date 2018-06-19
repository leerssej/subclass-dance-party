var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBlinkyDancer.prototype)
  // this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeDancer;

makeBlinkyDancer.prototype.step = function() {
  // this.oldStep.call(this);
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


