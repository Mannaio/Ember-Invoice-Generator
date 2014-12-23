App.TotalView = Ember.View.extend({
 templateName:"total",
 tagName: 'p',
 attributeBindings: ['total:value'],
 placeholder: null,
 total: (function() {
   var res= parseInt(this.get('controller.quantita')) * parseInt(this.get('controller.tariffa'));
   return isNaN(res)?"":res;
   }).property('controller.tariffa', 'controller.quantita')
});

App.IvamountView = Ember.View.extend({
 templateName:"ivamount",
 tagName: 'p',
 attributeBindings: ['iva:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 iva: (function() {
  var res= parseInt(this.get('controller.iva')) * parseInt(this.get('total'));
  return isNaN(res)?"":res;
	}).property('controller.iva', 'total')
});

App.RisultatoView = Ember.View.extend({
 templateName:"risultato",
 tagName: 'input',
 attributeBindings: ['risultatofinale:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 risultatofinale: (function() {
 	var res= this.get('controller.newTransaction.risultatofinale');
 	return isNaN(res)?"":res;
 	}).property('controller.newTransaction.total', 'controller.newTransaction.ivamount')
});
