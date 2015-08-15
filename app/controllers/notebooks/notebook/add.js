import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  body: '',
  actions:{
    add:function(){
      var dis = this,
        title = this.get('name'),
        body = this.get('body'),
        notebook = this.get('model')

        this.store.createRecord('notebook.page',{
          name: title,
          content: body,
          notebook: notebook
        }).save().then(function(){
          dis.send('reset')
        })
    },
    reset: function(){
      this.set('name', '');
      this.set('body', '');
    }
  }
});
