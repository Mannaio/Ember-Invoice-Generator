App.IndexController=Ember.ArrayController.extend({

   // selectContentTariffa: null,
   // selectContentIva: null,

  selectContentTariffa: [
   {label: "180", value: "180"},
   {label: "200", value: "200"},
   {label: "300", value: "300"}
  ],

  selectContentIva: [
   {label: "4%",  value: "0.04"},
   {label: "10%", value: "0.1"},
   {label: "22%", value: "0.22"}
  ],


	totale: null,
  sortProperties: ['name'],
  sortAscending: true, // false = descending
    
  fatturasCount: function(){
      return this.get('model.length');
  }.property('@each'),

});

