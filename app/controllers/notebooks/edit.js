import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    submit: function(){
      var model = this.get('model');

      model.save();
      console.log('save');

      this.transitionToRoute('notebooks.notebook', model);
    }
  }
});
