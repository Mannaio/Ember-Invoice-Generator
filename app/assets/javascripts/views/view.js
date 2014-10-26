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

