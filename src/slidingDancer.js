var slidingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="slider"></span>');
  this.setPosition(top,left);
};
slidingDancer.prototype = Object.create(Dancer.prototype);
slidingDancer.prototype.constructor = slidingDancer;

slidingDancer.prototype.step = function(timeBetweenSteps) {
  this._timeBetweenSteps = timeBetweenSteps;
  Dancer.prototype.step.call(this);
};

slidingDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
