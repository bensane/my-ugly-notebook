import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    add: function(){
      var name = this.get('name'),
        description = this.get('description')

        this.store.createRecord('notebook', {
          name: name,
          description: description
        })
    }
  }
});
