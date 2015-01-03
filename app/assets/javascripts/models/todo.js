App.Fattura = DS.Model.extend({
  name          : DS.attr('string'),
  transactions  : DS.hasMany('transaction', {async:true})
});

App.Transaction = DS.Model.extend({
  quantita        : DS.attr('string'),
  tariffa         : DS.attr('string'),
  lordo           : DS.attr('string'),
  iva             : DS.attr('string'),
  ivamount        : DS.attr('string'),
  netto           : DS.attr('string'),
  total           : DS.attr('string'),
  fattura         : DS.belongsTo('fattura'),
  isChecked       : DS.attr('boolean'),
  updateLordo: function() {

  // get the reference to the values of fare and quantity
  var quantita = this.get('quantita'),
      tariffa = this.get('tariffa');

  // massage them to make sure your stuff is not gonna break
  if (isNaN(tariffa)) { tariffa = 0; }
  if (isNaN(quantita)) { quantita = 0; }

  // calculate
  var lordo = tariffa * quantita;

  // set the lordo
  this.set('lordo', lordo);

}.observes('quantita', 'tariffa'),

  updateIva: function(){

  var iva = this.get('iva'),
      lordo = this.get('lordo');

  // massage them to make sure your stuff is not gonna break
  if (isNaN(lordo)) { lordo = 0; }
  if (isNaN(iva)) { iva = 0; }

  // calculate
  var ivamount = iva * lordo;

  // set the lordo
  this.set('ivamount', ivamount);


  }.observes('iva', 'lordo'),

  updateRisultato: function(){

  var ivamount = this.get('ivamount'),
      lordo    = this.get('lordo');

  if (isNaN(ivamount)) {ivamount = 0;}
  if (isNaN(lordo)) {lordo = 0;}

  var netto = ivamount + lordo

  this.set('netto', netto);

  }.observes('ivamount', 'lordo')

});

App.Fattura.reopenClass({
  FIXTURES: [
    {
      id          : '1',
      name        : 'Fattura num 1',
      transactions: [1]
    }
  ]
});

App.Transaction.reopenClass({
  FIXTURES: [
    {
      id            : '1',
      quantita      : null,
      lordo         : null,
      ivamount      : null,
      risulatofinale: null
    }
  ]
});
