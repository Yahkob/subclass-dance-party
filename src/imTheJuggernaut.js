var juggernaut = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer juggernaut"></span>');
  this.setPosition(top,left);
};
juggernaut.prototype = Object.create(Dancer.prototype);
juggernaut.prototype.constructor = juggernaut;

juggernaut.prototype.step = function(timeBetweenSteps) {
  this._timeBetweenSteps = timeBetweenSteps;
  Dancer.prototype.step.call(this);
};

juggernaut.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
