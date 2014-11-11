App.Fattura = DS.Model.extend({
  name   	: DS.attr('string'),
  quantita	: DS.attr('string')
});


App.Fattura.FIXTURES = [
 {
   id: 1,
   name: 'Fattura Num 1',
   quantita: '100'
 }
];

App.Tariffa = DS.Model.extend({ 
    name: DS.attr('string')
});

App.Tariffa.FIXTURES = [
    {
        id: '100',
        name: '100'
    },
    {
        id: '200',
        name: '200'
    },
    {
    	id: '300',
    	name: '300'
    }
];
