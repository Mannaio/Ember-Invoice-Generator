import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    return this.store.createRecord('fattura');
  },

  // in this case (the create route) we can re-use the fattura/edit template
  // associated with the fatturasCreateController
  renderTemplate: function(){
    this.render('fatturas.edit', {
        controller: 'fatturas.create'
    });
  }
});
