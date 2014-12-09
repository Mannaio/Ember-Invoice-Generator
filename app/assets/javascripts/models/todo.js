App.Fattura = DS.Model.extend({
  name          : DS.attr('string'),
  transactions  : DS.hasMany('transaction', {async:true})
});

App.Transaction = DS.Model.extend({
  id            : '1',
  quantita      : DS.attr('string'),
  totale        : DS.attr('string'),
  ivamount      : DS.attr('string'),
  risulatofinale: DS.attr('string'),
  fattura       : DS.belongsTo('fattura'),
  selectContentTariffas      : DS.hasMany('selectContentTariffa', {async:true}),
  selectContentIvas          : DS.hasMany('selectContentIva', {async:true})
});

App.SelectContentTariffa = DS.Model.extend({ 
  label: DS.attr('string'),
  value: DS.attr('string'),
  transaction: DS.belongsTo('transaction')
});

App.SelectContentIva = DS.Model.extend({ 
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
