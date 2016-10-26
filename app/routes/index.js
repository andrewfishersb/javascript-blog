import Ember from 'ember';

export default Ember.Route.extend({
  // categoryType: 'all',
  //add params as parameter if single post?
  model(){
    return this.store.query('post', {orderBy:'timestamp'});
  },
  actions:{

    savePost3(params){
      var newPost = this.store.createRecord('post',params);
      newPost.save();
      this.transitionTo('index');
    },
    updatePost(post, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    deleteEntry(entry){
      entry.destroyRecord();
      this.transitionTo('index');
    }
  }
});
