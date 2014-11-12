import UnoRoute from '../../routes/uno_route';

export default UnoRoute.extend({
  model: function() {
    return this.store.find('teacher');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
