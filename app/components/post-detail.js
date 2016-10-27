import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if(confirm('Are you sure you?')) {
        this.sendAction('destroyPost', post);
      }
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});
