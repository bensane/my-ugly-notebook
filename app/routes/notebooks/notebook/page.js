import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel:function(p){
    console.log(p)
  },
  model: function(p){
    console.log(p)
  }
});
