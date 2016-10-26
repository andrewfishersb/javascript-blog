import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogShown() {
      this.set('updateBlogForm', true);
    },
    updatePost(post) {
      var params = {
      title: this.get('title'),
      user: this.get('user'),
      content: this.get('content'),
      category: this.get('category'),
      tag: this.get('tag'),
      time: moment().format("dddd, MMMM Do YYYY, h:mm a")
      };
      this.set('updateBlogForm', false);
      this.sendAction('updatePost', post, params);
      }

  }
});
