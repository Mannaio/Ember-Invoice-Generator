App.TransactionsController=Ember.ArrayController.extend({

   selectContentTariffa: null,
   selectContentIva: null,

   selectContentTariffa: [
     {label: "180", value: "180"},
     {label: "200", value: "200"},
     {label: "300", value: "300"}
   ],

   selectContentIva: [
     {label: "180", value: "180"},
     {label: "200", value: "200"},
     {label: "300", value: "300"}
   ],


	newThread:function(){
		return {quantita:null,tariffa:null,totale:null,weight:null};
		}.property(),
		
	edit:function(ob){
		this.map(function(item,index){
			if(ob.id===item.id)
				Em.set(item,'editable',true);
			});
		},
		
	update:function(ob){
		this.map(function(item,index){
			if(ob.id===item.id)
				Em.set(item,'editable',false);
      });
		},
		
	remove:function(ob){
		this.removeObject(ob);
		},
		
	add:function(){
		this.addObject(this.get('newThread'));
    this.set('newThread',{quantita:null,tariffa:null,totale:null});
		}

});

