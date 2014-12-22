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

  updateTotal: function() {

    // get the reference to the values of fare and quantity
    var quantita = this.get('quantita'),
        tariffa =  this.get('selectContentTariffa.value');

    // message them to make sure your stuff is not gonna break
    if (isNaN(tariffa))  { tariffa  = 0; }
    if (isNaN(quantita)) { quantita = 0; }

    // calculate
    var total = tariffa * quantita;

    // set the total
    this.set('total', total);

  }.observes('quantita', 'selectContentTariffa.value'),

  actions: {

    save: function () {
      // save and commit
      var newFattura = this.get('model');
      newFattura.save();
      // redirects to the fattura itself
      this.transitionToRoute('fattura', newFattura);
    },
  }

});
