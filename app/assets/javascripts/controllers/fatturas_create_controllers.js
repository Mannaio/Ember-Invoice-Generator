// Fattura creation form controller
App.FatturasCreateController = Em.ObjectController.extend({
    
    needs:['tariffa', 'iva'],

    actions: {
      save: function () {

          // save and commit
          var newFattura = this.get('model');
          newFattura.save();

          // redirects to the fattura itself
          this.transitionToRoute('fattura', newFattura);
      }
    }
});
