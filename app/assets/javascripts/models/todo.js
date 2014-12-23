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
  isChecked     : DS.attr('boolean')
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
