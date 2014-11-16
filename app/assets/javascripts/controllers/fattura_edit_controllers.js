// single fattura edit form controller
App.FatturaEditController = Ember.ObjectController.extend({

	needs:['tariffa', 'iva'],

  updateTotal: function() {

    // get the reference to the values of fare and quantity
    var quantita =  this.get('quantita'),
        tariffa  =  this.get('controllers.tariffa.selectedTariffa.id');

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


  updateFinal: function() {
	var totale 		= this.get('totale'),
		ivamount	= this.get('ivamount');

	if(isNaN(totale))   { totale = 0; }
	if(isNaN(ivamount)) { ivamount = 0;}

	var risultatofinale = totale + ivamount;

	this.set('risultatofinale', risultatofinale);

  }.observes('totale', 'ivamount'),


  actions: {
    save: function(){
        var fattura = this.get('model');
        fattura.save();
        this.transitionToRoute('fattura', fattura);
    }
  },

});