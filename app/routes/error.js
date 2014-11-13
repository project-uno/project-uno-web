import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var errorMessage = "";

    switch(model.error().status) {
      case 0:
        errorMessage = "Please check if your API server is up and running";
        break;
      case 500:
        errorMessage = "Error 500";
        break;
    }

    controller.set('errorMessage', errorMessage);
  }
});
