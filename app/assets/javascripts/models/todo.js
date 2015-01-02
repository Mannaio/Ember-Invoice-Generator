App.Fattura = DS.Model.extend({
  name          : DS.attr('string'),
  transactions  : DS.hasMany('transaction', {async:true})
});

App.Transaction = DS.Model.extend({
  quantita      : DS.attr('string'),
  total         : DS.attr('string'),
  ivamount      : DS.attr('string'),
  risulatofinale: DS.attr('string'),
  fattura       : DS.belongsTo('fattura'),
  tariffa       : DS.attr('string'),
  iva           : DS.attr('string'),
  isChecked     : DS.attr('boolean'),
  updateTotal: function() {

  // get the reference to the values of fare and quantity
  var quantita = this.get('quantita'),
      tariffa = this.get('tariffa');

  // massage them to make sure your stuff is not gonna break
  if (isNaN(tariffa)) { tariffa = 0; }
  if (isNaN(quantita)) { quantita = 0; }

  // calculate
  var total = tariffa * quantita;

  // set the total
  this.set('total', total);

}.observes('quantita', 'tariffa')

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
      total         : null,
      ivamount      : null,
      risulatofinale: null
    }
  ]
});
