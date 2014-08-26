import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('avatar', params.user_id).then(function(avatar){
      return avatar;
    }, function(_this){
      return function(){
        _this.transitionTo('users.avatarerror');
      }
    }(this));
  }
});
