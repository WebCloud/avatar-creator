import DS from 'ember-data';

var User =  DS.Model.extend({
  avatar: DS.belongsTo('avatar')
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      avatar: 1
    }
  ]
});

export default User;
