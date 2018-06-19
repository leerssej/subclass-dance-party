var makePinkDancer = function (top, left, timeBetweenSteps) {
  // this = Object.create(makeBlinkyDancer.prototype)
  // this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pink dancer special"></span>');
  this.setPosition(top, left);
};

makePinkDancer.prototype = Object.create(makeDancer.prototype);
makePinkDancer.prototype.constructor = makeDancer;

makePinkDancer.prototype.step = function() {
  // this.oldStep.call(this);
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};