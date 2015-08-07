import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.resource('notebooks', {path: '/notebooks'}, function() {
    this.route('add');
    this.route('edit', {path: 'edit/:notebook_id'});
    this.route('notebook', {path: '/:notebook_id'}, function(){
      this.route('page', {path:'/:page_id'});
      this.route('add');
    });
  });

});

export default Router;
