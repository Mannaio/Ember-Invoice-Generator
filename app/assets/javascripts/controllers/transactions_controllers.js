App.TransactionsController=Ember.ArrayController.extend({
	
	newThread:function(){
		return {primary:null,secondary:null,weight:null};
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
                this.set('newThread',{primary:null,secondary:null});
		}

});
