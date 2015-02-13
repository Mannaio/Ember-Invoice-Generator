App.DateMaskComponent = Ember.Component.extend({
  _initializeDateMask: (function() {
    return $(".date").mask("9999-99-99");
  }).on("didInsertElement"),
  keyUp: function() {
    return this.sendAction('inputValidator');
  }
});