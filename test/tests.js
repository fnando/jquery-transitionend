function spy() {
  var callback = function() {
    callback.called = true;
  };

  return callback;
}

QUnit.test('transitionend', function(assert){
  var callback = spy();
  var done = assert.async();

  expect(1);

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
    done();
  }, 500);
});

QUnit.test('events object', function(assert){
  var callback = spy();
  var done = assert.async();

  expect(1);

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
    done();
  }, 500);
});
