App.TotaleView=Ember.View.extend({
  tagName: 'div',
  elementId: ['totale']
});

// App.TotaleController=Ember.ObjectController.extend({
//   actions: {
//     Total: function(){
//       return this.get('newThread.quantita') * this.get('newThread.selectContentTariffa');
//     }.property('newThread.quantita', 'newThread.selectContentTariffa')
//   }
// });