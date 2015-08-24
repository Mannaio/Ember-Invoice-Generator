import Ember from 'ember';

export default Ember.ArrayController.extend({

  fatturasCount: function(){
    return this.get('model.length');
  }.property('@each')

});
