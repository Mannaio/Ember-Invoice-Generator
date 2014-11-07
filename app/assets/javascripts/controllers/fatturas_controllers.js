App.FatturasController=Ember.ArrayController.extend({

    sortProperties: ['name'],
    sortAscending: true, // false = descending
    
    fatturasCount: function(){
        return this.get('model.length');
    }.property('@each')

});