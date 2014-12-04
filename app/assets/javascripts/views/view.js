App.TotalView = Ember.View.extend({
 templateName:"total",
 tagName: 'input',
 attributeBindings: ['total:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 total: (function() {
    var res= this.get('controller.transaction.total');
   return isNaN(res)?"":res;
	}).property('controller.transaction.selectContentTariffa', 'controller.transaction.quantita')
});

App.IvaView = Ember.View.extend({
 templateName:"iva",
 tagName: 'input',
 attributeBindings: ['ivamount:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 ivamount: (function() {
    var res= this.get('controller.transaction.ivamount');
    return isNaN(res)?"":res;
	}).property('controller.transaction.selectContentIva', 'controller.transaction.total')
});

App.RisultatoView = Ember.View.extend({
 templateName:"risultato",
 tagName: 'input',
 attributeBindings: ['risultatofinale:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 risultatofinale: (function() {
 	var res= this.get('controller.transaction.risultatofinale');
 	return isNaN(res)?"":res;
 	}).property('controller.transaction.total', 'controller.transaction.ivamount')
});
