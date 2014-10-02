App.TransactionsController=Ember.ArrayController.extend({

	// tariffa     : ['140', '200'],
	// perc	    	: ['4%', '10%', '22%'],

	selectContentType: null,

  selectContentType: [
    {label: "All", value: "all"},
    {label: "Text", value: "text"},
    {label: "Image", value: "image"}
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
    this.set('newThread',{quantita:null,tariffa:null,totale:null,weight:null});
		}

});

