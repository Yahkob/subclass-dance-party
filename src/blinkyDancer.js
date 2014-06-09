var BlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

BlinkyDancer.prototype.makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var oldStep = this.step;
  this.step = function() {
    oldStep();
    this.$node.toggle();
  };
};
