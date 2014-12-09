App.TotalView = Ember.View.extend({
 templateName:"total",
 tagName: 'input',
 attributeBindings: ['total:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 total: (function() {
    var res= this.get('controller.newTransaction.total');
   return isNaN(res)?"":res;
	}).property('controller.newTransaction.selectContentTariffa', 'controller.newTransaction.quantita')
});

App.IvaView = Ember.View.extend({
 templateName:"iva",
 tagName: 'input',
 attributeBindings: ['ivamount:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 ivamount: (function() {
    var res= this.get('controller.newTransaction.ivamount');
    return isNaN(res)?"":res;
	}).property('controller.newTransaction.selectContentIva', 'controller.newTransaction.total')
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
