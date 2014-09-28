// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function(){
   this.resource('transactions');
});

App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('transactions');
    }
});


App.TransactionsRoute=Ember.Route.extend({
	model:function(){
      return [
        {id:1,primary:"Input 1",secondary:"Select 2"},
        {id:2,primary:"Input 2",secondary:"Select 3"},
        {id:3,primary:"Input 3",secondary:"Select 4"},
        {id:4,primary:"Input 4",secondary:"Select 4"} ];
        }	
});


