// Fattura creation form controller
App.FatturasCreateController=Ember.ObjectController.extend({

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

    remove: function() {
      var allSelectedItems = this.get("model.transactions").filterBy("isChecked", true);
      return this.get('model.transactions').removeObjects(allSelectedItems);
    },

    save: function () {
      // save and commit
      var newFattura = this.get('model');
      newFattura.save();
      // redirects to the fattura itself
      this.transitionToRoute('fattura', newFattura);
    },

  },

  transactionsChecked: function() {
    return this.get("model.transactions").filterBy("isChecked", true).get("length");
  }.property("model.transactions.@each.isChecked"),

  numberTransactions: function() {
    return this.get("model.transactions").filterBy("isChecked", false).get("length");
  }.property("model.transactions.@each"),

});






