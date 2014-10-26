App.TotalView = Ember.View.extend({
 templateName:"total",
 tagName: 'input',
 attributeBindings: ['total:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 total: (function() {
    var res= this.get('controller.newThread.total');
   return isNaN(res)?"":res;
	}).property('controller.newThread.selectContentTariffa', 'controller.newThread.quantita')
});

App.IvaView = Ember.View.extend({
 templateName:"iva",
 tagName: 'input',
 attributeBindings: ['iva:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 iva: (function() {
    var res= this.get('controller.newThread.iva');
    return isNaN(res)?"":res;
	}).property('controller.newThread.selectContentIva', 'controller.newThread.total')
});

App.RisultatoView = Ember.View.extend({
 templateName:"risultato",
 tagName: 'input',
 attributeBindings: ['risultato:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 risultato: (function() {
 	var res= this.get('controller.newThread.risultato');
 	return isNaN(res)?"":res;
 	}).property('controller.newThread.total', 'controller.newThread.iva')
});

