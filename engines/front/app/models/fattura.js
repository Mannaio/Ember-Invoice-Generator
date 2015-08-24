import DS from 'ember-data';

var Fattura = DS.Model.extend({
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
  }.observes('transactions.length', 'transactions.@each.ivamount')
});

Fattura.reopenClass({
  FIXTURES: []
});

export default Fattura;
