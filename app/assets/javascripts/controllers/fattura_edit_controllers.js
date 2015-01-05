// single fattura edit form controller
App.FatturaEditController = Ember.ObjectController.extend({

  // selectContentTariffa: null,
  // selectContentIva: null,

  selectContentTariffa: [
   {label: "180", value: "180"},
   {label: "200", value: "200"},
   {label: "300", value: "300"}
  ],

  selectContentIva: [
   {label: "4%",  value: "0.04"},
   {label: "10%", value: "0.1"},
   {label: "22%", value: "0.22"}
  ],

  actions: {

    add: function() {
 
      var transactionRecord = this.store.createRecord('transaction', {
        name: 'new transaction',
        isChecked: false
      });
      
      return this.get("model.transactions").addObject(transactionRecord);
    },

    save: function () {
      // save and commit
      var newFattura = this.get('model');
      newFattura.save();
      // redirects to the fattura itself
      this.transitionToRoute('fattura', newFattura);
    },
  }


});
