import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('teachers', function() {
    this.route('new');
  });

  this.resource('errors', function() {
    this.route('500');
  });


});

export default Router;
