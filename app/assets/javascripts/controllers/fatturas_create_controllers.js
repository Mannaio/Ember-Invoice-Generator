// Fattura creation form controller
App.FatturasCreateController=Ember.ObjectController.extend({

  dateDisplay: "",
  isValid: false,

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

  validState: (function() {
    if (this.get("isValid")) {
      return "has-success";
    } else {
      return "has-error";
    }
  }).property("isValid"),

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
      }
      // and then go to the fatturas route
      this.transitionToRoute('index');
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

    validateDate: function() {
      var date;
      date = moment(this.get("theDate"));
      if (date.isValid()) {
        this.set("date", date.toDate());
        this.set("dateDisplay", date.format("MMM Do YYYY"));
        return this.set("isValid", true);
      } else {
         this.set("date", null);
        this.set("dateDisplay", "Invalid");
        return this.set("isValid", false);
      }
    },

  },

  transactionsChecked: function() {
    return this.get("model.transactions").filterBy("isChecked", true).get("length");
  }.property("model.transactions.@each.isChecked"),

  numberTransactions: function() {
    return this.get("model.transactions").filterBy("isChecked", false).get("length");
  }.property("model.transactions.@each"),

});






