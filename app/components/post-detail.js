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
    },
    updateComment(comment,params){
      this.sendAction("updateComment",comment,params);
    },
    saveComment(params){
      this.sendAction('saveComment',params);
    },
    updatePost(post,params){
      this.sendAction("updatePost",post,params);
    }
  }
});
