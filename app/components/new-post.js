import Ember from 'ember';

export default Ember.Component.extend({
  blogForm : false,
  actions:{
    savePost(){
      if(!this.get('title')&&!this.get('user')&&!this.get('content')){
        alert("Please Enter In a title, user and content");
      }else{
        var params = {
          title: this.get('title') ? this.get('title'):"",
          user: this.get('user') ? this.get('user'):"",
          content: this.get('content') ? this.get('content'):"",
          category: this.get('category') ? this.get('category'):"",
          tag: this.get('tag') ? this.get('tag'):"",
          time: moment().format("dddd, MMMM Do YYYY, h:mm a"),
          timestamp:moment().unix()
        };
        this.set("blogForm",false);
        this.sendAction("savePost2",params);
      }

    },
    postBlogShown(){
      this.set('blogForm',true);
    }
  }
});
