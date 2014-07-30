// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('people', function(){
    this.route('person');
  });
  this.route('about');
  this.route('skills');
  this.resource('work', function(){
    this.route('web');
    this.route('front-end');
    this.route('photography');
  });
});


