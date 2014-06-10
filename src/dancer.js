var Dancer = function(top, left, timeBetweenSteps) {
  //creating a span tag to contain dancers
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top,left);
  this.step(timeBetweenSteps);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  console.log(timeBetweenSteps);
  setTimeout(function(){
    // console.log(timeBetweenSteps)
    // Dancer.prototype.step.bind(Dancer);
    Dancer.prototype.step.bind(Dancer);
  },timeBetweenSteps);

};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

