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

    remove: function() {
      var allSelectedItems = this.get("model.transactions").filterBy("isChecked", true);
      this.get('model.transactions').removeObjects(allSelectedItems);

      allSelectedItems.forEach(function(item) {
          item.deleteRecord();
      });
    },

    delete: function(){
        // the delete method only toggles deleteMode value
        this.toggleProperty('deleteMode');
    },

    cancelDelete: function(){
        // set deleteMode back to false
        this.set('deleteMode', false);
    },

    confirmDelete: function() {
      var transactions = this.get('model.transactions'),
          list = transactions.toArray();
      list.forEach(function(transaction) {
        if (!transaction.get('isDeleted'))
        {
          transaction.deleteRecord();
          transactions.removeObject();
        }
      });
      var model = this.get('model');
      if(!model.get('isDeleted'))
      {
        this.get('model').deleteRecord();
        this.get('model').save();
        this.transitionToRoute('index');
      }
      // and then go to the fatturas route
      // set deleteMode back to false
      this.set('deleteMode', false);
    },

    save: function () {
      // save and commit
      var newFattura = this.get('model');
      newFattura.save();
      // redirects to the fattura itself
      this.transitionToRoute('index');
    },

  },

  transactionsChecked: function() {
    return this.get("model.transactions").filterBy("isChecked", true).get("length");
  }.property("model.transactions.@each.isChecked"),

  numberTransactions: function() {
    return this.get("model.transactions").filterBy("isChecked", false).get("length");
  }.property("model.transactions.@each"),


});
