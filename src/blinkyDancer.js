var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.toggle();

};
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// var oldStep = makeBlinkyDancer.step;
// makeBlinkyDancer.prototype.step = function(){
//   oldStep();
//   makeBlinkyDancer.this.$node.toggle();
// };
