var spinningDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="spinner"></span>');
    this.setPosition(top,left);
};
spinningDancer.prototype = Object.create(Dancer.prototype);
spinningDancer.prototype.constructor = spinningDancer;

spinningDancer.prototype.step = function(timeBetweenSteps) {
  this._timeBetweenSteps = timeBetweenSteps;
  Dancer.prototype.step.call(this);
};

spinningDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
