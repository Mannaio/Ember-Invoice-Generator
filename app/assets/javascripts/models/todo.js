App.IsodateTransform = DS.Transform.extend({  
  deserialize: function(serialized) {
    return Ember.isEmpty(serialized) ? null : moment(serialized, 'YYYY-MM-DD').toDate().toISOString();
  },
  serialize: function(deserialized) {
    return Ember.isEmpty(deserialized) ? null : moment(deserialized).format('YYYY-MM-DD');
  }
});

App.register('transform:isodate', App.IsodateTransform);  


App.Fattura = DS.Model.extend({
  name                : DS.attr('string'),
  transactions        : DS.hasMany('transaction', {async:true}),
  transactionsAmounts : DS.attr('string'),
  transactionsIvas    : DS.attr('string'),
  theDate             : DS.attr("isodate"),
  setTransactionAmount : function(){
    if(!this.get('isDeleted') && this.get("transactions.length") > 0){
      this.get("transactions").then(function(transactions){
        var sum=0;
        transactions.forEach(function(transaction){
          if(!transaction.get('isDeleted'))
          {
            sum += transaction.get("netto");
          }
        });
        if(!this.get('isDeleted'))
        {
          this.set("transactionsAmounts",sum);
        }
      }.bind(this));
    }
  }.observes('transactions.length', 'transactions.@each.netto'),
  setTransactionIva: function(){
    if(!this.get('isDeleted') && this.get("transactions.length") > 0){
      this.get("transactions").then(function(transactions){
        var sum=0;
        transactions.forEach(function(transaction){
          if(!transaction.get('isDeleted'))
          {
            sum += transaction.get("ivamount");
          }
        });
        if(!this.get('isDeleted'))
        {
          this.set("transactionsIvas",sum);
        }
      }.bind(this));
    }
  }.observes('transactions.length', 'transactions.@each.ivamount'),
});


App.Transaction = DS.Model.extend({
  isChecked       : DS.attr('boolean'),
  quantita        : DS.attr('string'),
  tariffa         : DS.attr('string'),
  netto           : DS.attr('string'),
  iva             : DS.attr('string'),
  ivamount        : DS.attr('string'),
  netto           : DS.attr('string'),
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

  var lordo = ivamount + netto

  this.set('lordo', lordo);

  }.observes('ivamount', 'netto')

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
