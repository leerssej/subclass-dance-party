var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // makeDancer.call(this);
  // this = Object.create(makeBlinkyDancer.prototype)
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, ...arguments);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};


