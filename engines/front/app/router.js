import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('fatturas', function(){
    this.route('create');
    this.route('show', {path:'/show/:fattura_id'});
    this.route('edit', {path: '/:fattura_id'});
  });

  this.route('missing', { path: '/*path' });
});

export default Router;
