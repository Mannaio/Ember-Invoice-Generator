import DS from 'ember-data';

var Transaction = DS.Model.extend({
  isChecked       : DS.attr('boolean'),
  quantita        : DS.attr('string'),
  tariffa         : DS.attr('string'),
  netto           : DS.attr('string'),
  iva             : DS.attr('string'),
  ivamount        : DS.attr('string'),
  lordo           : DS.attr('string'),
  fattura         : DS.belongsTo('fattura'),

  updateLordo: function() {
    // get the reference to the values of fare and quantity
    var quantita = this.get('quantita'),
        tariffa = this.get('tariffa');

    // massage them to make sure your stuff is not gonna break
    if (isNaN(tariffa)) { tariffa = 0; }
    if (isNaN(quantita)) { quantita = 0; }

    // calculate
    var netto = tariffa * quantita;

    // set the lordo
    this.set('netto', netto);

  }.observes('quantita', 'tariffa'),

  updateIva: function(){

  var iva = this.get('iva'),
      netto = this.get('netto');

  // massage them to make sure your stuff is not gonna break
  if (isNaN(netto)) { netto = 0; }
  if (isNaN(iva)) { iva = 0; }

  // calculate
  var ivamount = iva * netto;

  // set the lordo
  this.set('ivamount', ivamount);


  }.observes('iva', 'netto'),

  updateRisultato: function(){

  var ivamount = this.get('ivamount'),
      netto    = this.get('netto');

  if (isNaN(ivamount)) {ivamount = 0;}
  if (isNaN(netto)) {netto = 0;}

  var lordo = ivamount + netto;

  this.set('lordo', lordo);

  }.observes('ivamount', 'netto')
});

Transaction.reopenClass({
  FIXTURES: []
});
export default Transaction;
