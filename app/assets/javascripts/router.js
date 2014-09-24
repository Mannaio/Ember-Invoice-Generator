// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function(){
    this.resource('transactions', function(){
        this.route('create');
    });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('transactions');
    }
});

App.CreateRoute = Ember.Route.extend({

    renderTemplate: function() {
      this.render('transactions.create');
    },

});


