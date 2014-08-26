import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    this.set('groups', this.store.find('group'));
  }
});
