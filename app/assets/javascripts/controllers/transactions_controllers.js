App.TransactionsController=Ember.ArrayController.extend({

   selectContentTariffa: null,
   selectContentIva: null,

   selectContentTariffa: [
     {label: "Developer", value: "220"},
     {label: "Junior", value: "250"},
     {label: "Senior", value: "350"}
   ],

   selectContentIva: [
     {label: "IVA 10%", value: "10"},
     {label: "IVA 22%", value: "22"},
     {label: "IVA 4%", value: "4"}
   ],


	newThread:function(){
		return {quantita:null,tariffa:null,totale:null,weight:null};
		}.property(),
		
	edit:function(ob){
		this.forEach(function(item){
			if(ob === item)
				Em.set(item,'editable',true);
			});
		},
		
	update:function(ob){
		this.forEach(function(item){
			if(ob === item)
				Em.set(item,'editable',false);
      });
		},
		
	remove:function(ob){
		this.removeObject(ob);
		},
		
	add:function(){
		this.addObject(this.get('newThread'));
    this.set('newThread',{quantita:null,tariffa:null,totale:null});
		},

  total: function(){
    return this.get('newThread.quantita') * this.get('newThread.selectContentTariffa');
  }.property('newThread.quantita', 'newThread.selectContentTariffa')

});
