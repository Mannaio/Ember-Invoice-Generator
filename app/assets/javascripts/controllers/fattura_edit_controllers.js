// single fattura edit form controller
App.FatturaEditController = Ember.ObjectController.extend({

	totale: null,
	needs:['tariffa', 'iva'],

    totale:function(){
    	return this.set("totale",this.get("quantita")*this.get("selectedTariffa"));
 	}.property("quantita","selectedTariffa"),

    actions: {
        save: function(){
            var fattura = this.get('model');
            fattura.save();
            this.transitionToRoute('fattura', fattura);
        }
    }
});