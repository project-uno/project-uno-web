import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('teacher');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  },

  actions: {
    error: function(error, transition) {
      this.transitionTo('errors.500');
    }
  }
});
