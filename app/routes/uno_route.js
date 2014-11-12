import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function(error) {
      if(error.status === 0) {
        this.transitionTo('errors.500');
      }
    }
  }
});
