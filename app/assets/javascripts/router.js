// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function(){
   this.resource('transactions');
});

App.IndexRoute = Ember.Route.extend({
    redirect: function(){
      this.transitionTo('transactions');
    }
});

