import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.query('post', {orderBy:'timestamp'});
  },
  
  actions:{
    savePost3(params){
      var newPost = this.store.createRecord('post',params);
      newPost.save();
      this.transitionTo('index');
    },

  }
});
