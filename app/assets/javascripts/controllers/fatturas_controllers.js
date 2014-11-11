App.FatturasController=Ember.ArrayController.extend({

    sortProperties: ['name'],
    sortAscending: true, // false = descending
    
    fatturasCount: function(){
        return this.get('model.length');
    }.property('@each')

});

App.TariffaController = Em.Controller.extend({

	selectedTariffa: null,
    needs:['tariffa'],

    selectedTariffa: Ember.computed.alias('content.firstObject'),
    init: function() {
        this._super();
        this.set('model', this.get('store').find('tariffa'))
    }
})

