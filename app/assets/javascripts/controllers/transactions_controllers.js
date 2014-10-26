App.TransactionsController=Ember.ArrayController.extend({

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

	newThread:function(){
	   return this.initializeNewThread();
	}.property(),


    initializeNewThread:function(){
    
	 var aNewThread= Em.Object.create({
	    selectContentTariffa:null,
	    quantita:null,
	    total:null,
	    selectContentIva:null,
	    iva:null,
	    weight:null
	 });
    
     aNewThread.reopen({
      calcTotal:function(){
            this.set("total",this.get("quantita")*this.get("selectContentTariffa"));
          }.observes("quantita","selectContentTariffa"),
      });      
      // percTotal:function(){
      // 		this.set("iva",this.get("total")*this.get("selectContentIva") / 100));
      // 	 }.observes("total", "selectContentIva"),
      // });
    
      return aNewThread;
    
    },
		
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
    	this.set("newThread",this.initializeNewThread());
		},


});