App.TotalView = Ember.View.extend({
 templateName:"total",
 tagName: 'input',
 attributeBindings: ['total:value', 'placeholder', 'type'],
 type: 'number',
 placeholder: null,
 total: (function() {
    var res= parseInt(this.get('controller.newThread.quantita')) * parseInt(this.get('controller.newThread.selectContentTariffa'));
   return isNaN(res)?"":res;
	}).property('controller.newThread.quantita', 'controller.newThread.selectContentTariffa')
});