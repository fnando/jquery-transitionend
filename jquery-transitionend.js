(function($){
  var on = $.fn.on;
  var transitionEnd = 'webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend';
  var regex = /\btransitionend\b/ig;
  var slice = [].slice;

  $.fn.on = function(types) {
    // $.fn.on was monkeypatched by jquery-transition-events.js
    var args = slice.call(arguments, 0);

    if (typeof(types) === 'string' && types.match(regex)) {
      types = types.replace(regex, transitionEnd);
      args[0] = types;
    }

    return on.apply(this, args);
  };
})(jQuery);
