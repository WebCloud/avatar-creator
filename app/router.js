import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AvatarCreatorENV.locationType
});

Router.map(function() {
  this.resource('users', function(){
    this.route('avatar', {path:'/avatar/:user_id'});
    this.route('avatarerror');
  });
});

export default Router;
