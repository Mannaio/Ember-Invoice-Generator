App.FatturaController = Ember.ObjectController.extend({

    deleteMode: false,
    
    actions: {
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
          this.transitionToRoute('fatturas');
          // set deleteMode back to false
          this.set('deleteMode', false);
        },
        
        edit: function(){
            this.transitionToRoute('fattura.edit');
        }
    }
  
})

