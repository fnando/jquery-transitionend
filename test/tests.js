QUnit.asyncTest('transitionend', function(assert){
  expect(1);

  var called = false;
  var callback = function() {
    console.log("here");
    called = true;
  };

  $('<div class="to-be-animated">')
    .text('hello')
    .one('transitionend', callback)
    .appendTo('#qunit-fixture')
  ;

  setTimeout(function() {
    $('.to-be-animated').addClass('animate');
  }, 500);

  setTimeout(function(){
    assert.ok(called);
    QUnit.start();
  }, 1000);
});
