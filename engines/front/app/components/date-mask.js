import Ember from 'ember';

export default Ember.Component.extend({

  _initializeDateMask: (function() {
    return this.$(".date").mask("9999-99-99");
  }).on("didInsertElement"),

  keyUp: function() {
    return this.sendAction('inputValidator');
  }

});
