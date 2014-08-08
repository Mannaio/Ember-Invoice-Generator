App.Person = DS.Model.extend({
  name: DS.attr('string')
});


App.Person.FIXTURES = [
 {
   id:1,
   name: 'Tom'
 },
 {
   id: 2,
   name: 'Giorgio'
 },
 {
   id: 3,
   name: 'Laura'
 }
];