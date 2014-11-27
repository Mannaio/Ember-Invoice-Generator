App.Fattura = DS.Model.extend({
  name          : DS.attr('string'),
  transactions  : DS.hasMany('transaction', {async:true})
});

App.Transaction = DS.Model.extend({
  quantita      : DS.attr('string'),
  totale        : DS.attr('string'),
  ivamount      : DS.attr('string'),
  risulatofinale: DS.attr('string'),
  fattura       : DS.belongsTo('fattura'),
  tariffas      : DS.hasMany('tariffa', {async:true}),
  ivas          : DS.hasMany('iva', {async:true})
});

App.Tariffa = DS.Model.extend({ 
  label: DS.attr('string'),
  value: DS.attr('string'),
  transaction: DS.belongsTo('transaction')
});

App.Iva = DS.Model.extend({ 
  label: DS.attr('string'),
  value: DS.attr('string'),
  transaction: DS.belongsTo('transaction')
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
      totale        : null,
      ivamount      : null,
      risulatofinale: null
    }
  ]
});
