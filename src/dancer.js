var MakeDancer = function(top, left, timeBetweenSteps) {

  //creating a span tag to contain dancers
  this.$node = $('<span class="dancer"></span>');

  this.step = function() {
    setTimeout(this.step, timeBetweenSteps);
  };
  this.step();

  this.setPosition = funtion(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  this.setPosition(top, left);

  return this;

};
