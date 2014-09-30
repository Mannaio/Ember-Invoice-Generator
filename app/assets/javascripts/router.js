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
        {id:1,quantita:"Input 1",tariffa:"Select 1", totale: "Input 2"},
        {id:2,quantita:"Input 1",tariffa:"Select 1", totale: "Input 2"} ];
    }
});


