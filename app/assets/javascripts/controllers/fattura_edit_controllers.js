// single fattura edit form controller
App.FatturaEditController = Ember.ObjectController.extend({

    actions: {
        save: function(){
            var fattura = this.get('model');
            fattura.save();
            this.transitionToRoute('fattura', fattura);
        }
    }
});