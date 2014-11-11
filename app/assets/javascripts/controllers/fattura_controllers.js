App.FatturaController=Ember.ObjectController.extend({

    needs:['tariffa'],

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
        confirmDelete: function(){
            // this will tell Ember-Data to delete the current fattura
            this.get('model').deleteRecord();
            this.get('model').save();
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