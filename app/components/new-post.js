import Ember from 'ember';

export default Ember.Component.extend({
  blogForm : false,
  actions:{
    savePost(){
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        content: this.get('content'),
        category: this.get('category'),
        tag: this.get('tag'),
      };
      this.set("blogForm",false);
      this.sendAction("savePost2",params);
    },
    postBlogShown(){
      this.set('blogForm',true);
    }
  }
});
