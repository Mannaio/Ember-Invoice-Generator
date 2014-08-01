// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('about');
  this.route('skills');
  this.route('blog');
  this.resource('work', function(){
    this.route('photography');
    this.route('web');
    this.route('front-end');
  });
});


