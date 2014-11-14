// Fattura creation form controller
App.FatturasCreateController = Em.ObjectController.extend({
    
    needs:['tariffa', 'iva'],

    updateTotal: function() {

      // get the reference to the values of fare and quantity
      var quantita = this.get('quantita'),
          tariffa =  this.get('controllers.tariffa.selectedTariffa.id');

      // message them to make sure your stuff is not gonna break
      if (isNaN(tariffa))  { tariffa  = 0; }
      if (isNaN(quantita)) { quantita = 0; }

      // calculate
      var totale = tariffa * quantita;

      // set the total
      this.set('totale', totale);

    }.observes('quantita', 'controllers.tariffa.selectedTariffa'),


    updateIva: function() {

      var totale = this.get('totale'),
          iva    = this.get('controllers.iva.selectedIva.value');

      if(isNaN(totale)) { totale = 0; }
      if(isNaN(iva))    { iva = 0; }

      var ivamount = totale * iva;

      this.set('ivamount', ivamount);

    }.observes('totale', 'controllers.iva.selectedIva'),


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
