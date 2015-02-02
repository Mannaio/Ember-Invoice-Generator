// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function(){
    this.resource('fatturas', function(){
        this.resource('fattura', { path:'/:fattura_id' }, function(){
            this.route('edit');
        });
        this.route('create');
    });

    // this is our 404 error route - see MissingRoute just bellow
    this.route('missing', { path: '/*path' });

});
    

App.IndexRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('fattura');
    }
});
       
// singe user edit form route
App.FatturaEditRoute = Em.Route.extend({
    model: function(){ 
        return this.modelFor('fattura');
    }
});

// fattura creation form route
App.FatturasCreateRoute = Em.Route.extend({
    model: function(){
        // the model for this route is a new empty Ember.Object
        return this.store.createRecord('fattura');
    },

    // in this case (the create route) we can re-use the fattura/edit template
    // associated with the fatturasCreateController
    renderTemplate: function(){
        this.render('fattura.edit', {
            controller: 'fatturasCreate'
        });
    }
})



