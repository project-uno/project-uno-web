import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSubject: function() {

      var self      = this,
          subject   = this.store.createRecord('subject', this.get('fields'));

      subject.save().then(function() {
          self.transitionToRoute('subjects');
        })
        .catch(function(error) {
          alert(error);
        });
    },

    cancel: function() {
      this.transitionToRoute('subjects');
    }
  }
});
