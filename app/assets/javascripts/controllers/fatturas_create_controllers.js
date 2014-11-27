// Fattura creation form controller
App.FatturasCreateController = Em.ObjectController.extend({

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

  updateTotal: function() {

    // get the reference to the values of fare and quantity
    var quantita = this.get('quantita'),
        tariffa =  this.get('selectContentTariffa');

    // message them to make sure your stuff is not gonna break
    if (isNaN(tariffa))  { tariffa  = 0; }
    if (isNaN(quantita)) { quantita = 0; }

    // calculate
    var totale = selectContentTariffa * quantita;

    // set the total
    this.set('totale', totale);

  }.observes('quantita', 'selectContentTariffa'),


  updateIva: function() {

    var totale = this.get('totale'),
        iva    = this.get('selectContentIva');

    if(isNaN(totale)) { totale = 0; }
    if(isNaN(iva))    { iva = 0; }

    var ivamount = totale * selectContentIva;

    this.set('ivamount', ivamount);

  }.observes('totale', 'selectContentIva'),


  updateFinal: function() {
    var totale 		= this.get('totale'),
  	  ivamount		= this.get('ivamount');

    if(isNaN(totale))   { totale = 0; }
    if(isNaN(ivamount)) { ivamount = 0;}

    var risultatofinale = totale + ivamount;

    this.set('risultatofinale', risultatofinale);

  }.observes('totale', 'ivamount'),


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
