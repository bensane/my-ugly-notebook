import Ember from 'ember';

export default Ember.Route.extend({
  model: function(parms){
    return this.store.find('notebook', parms.notebook_id)
  }
});
