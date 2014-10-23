App.TransactionsController=Ember.ArrayController.extend({

   // selectContentTariffa: null,
   // selectContentIva: null,

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

	newThread:{
	  total:null,
      selectContentTariffa:null,
      quantita:null
    },


	newThread:function(){
		return {quantita:null,selectContentTariffa:null,total:null,selectContentIva:null};
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
    	this.set('newThread',{quantita:null,selectContentTariffa:null,total:null,selectContentIva:null});
		},


});