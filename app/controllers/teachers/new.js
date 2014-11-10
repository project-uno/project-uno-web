import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registerTeacher: function() {
      var self = this,
          teacher = this.store.createRecord('teacher', this.get('fields'));

      teacher.save()
        .then(function() {
          self.transitionTo('teachers');
        })
        .catch(function(errorObj) {
          if(errorObj.status === 400) {
            alert(errorObj.responseJSON.error)
          }
        });
    }
  }
});
