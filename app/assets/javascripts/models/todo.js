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
  name: DS.attr('string'),
  transaction: DS.belongsTo('transaction')
});

App.Iva = DS.Model.extend({ 
  name:  DS.attr('string'),
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
      quantita      : '100',
      totale        : null,
      ivamount      : null,
      risulatofinale: null
    }
  ]
});



App.Tariffa.reopenClass({
  FIXTURES : [
    {
      id: '100',
      name: '100'
    },
    {
      id: '200',
      name: '200'
    },
    {
      id: '300',
      name: '300'
    }
  ]
});

App.Iva.reopenClass({
  FIXTURES: [
    {
      id: '1',
      name: '10%',
      value: '0.1'
    },
    {
      id: '2',
      name: '4%',
      value: '0.04'
    },
    {
      id: '3',
      name: '22%',
      value: '0.22'
    }
  ]
});