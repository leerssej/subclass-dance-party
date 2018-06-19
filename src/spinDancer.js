var makeSpinDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBlinkyDancer.prototype)
  // this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinDancer"></span>');
  this.setPosition(top, left);
};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);
makeSpinDancer.prototype.constructor = makeDancer;

makeSpinDancer.prototype.step = function() {
  // this.oldStep.call(this);
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};