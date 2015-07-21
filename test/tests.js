function spy() {
  var callback = function() {
    callback.called = true;
  };

  return callback;
}

QUnit.asyncTest('transitionend', function(assert){
  expect(1);

  var callback = spy();

  $('<div class="to-be-animated">')
    .text('hello')
    .one('transitionend', callback)
    .appendTo('#qunit-fixture')
  ;

  setTimeout(function() {
    $('.to-be-animated').addClass('animate');
  }, 100);

  setTimeout(function(){
    assert.ok(callback.called);
    QUnit.start();
  }, 500);
});

QUnit.asyncTest('events object', function(assert){
  expect(1);

  var callback = spy();

  $('<div class="to-be-animated">')
    .text('hello')
    .one({transitionend: callback})
    .appendTo('#qunit-fixture')
  ;

  setTimeout(function() {
    $('.to-be-animated').addClass('animate');
  }, 100);

  setTimeout(function(){
    assert.ok(callback.called);
    QUnit.start();
  }, 500);
});
