import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentShown(){
      this.set("updateCommentForm", true);
    },
    updateComment(comment){
      var params = {
        content: this.get('content')
      };
      this.set('content',"");
      this.set("updateCommentForm",false);
      this.sendAction("updateComment",comment,params);
    }
  }
});
