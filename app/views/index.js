import Ember from "ember";

export default Ember.View.extend({

  didInsertElement: function() {
    $('header').velocity('transition.slideDownIn');
  }

});
