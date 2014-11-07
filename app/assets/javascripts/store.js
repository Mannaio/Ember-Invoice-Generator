// http://emberjs.com/guides/models/using-the-store/

App.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  adapter: DS.FixtureAdapter
});


// App.Person.adapter = Ember.RESTAdapter.create();
// App.Person.url = "api/people";
// App.Person.collectionKey = "people";