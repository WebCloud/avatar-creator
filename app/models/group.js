import DS from 'ember-data';

var Group = DS.Model.extend({
  types: DS.hasMany('type', { async: true }),
  description: DS.attr(),
  active: DS.attr('boolean')
});

Group.reopenClass({
  FIXTURES: [
    {
      id: 1,
      description: "Body",
      active: true
    },
    {
      id: 2,
      description: "Face",
      active: false
    },
    {
      id: 3,
      description: "Eyes",
      active: false
    },
    {
      id: 4,
      description: "Hair",
      active: false
    },
    {
      id: 5,
      description: "Mouth",
      active: false
    },
    {
      id: 6,
      description: "Nose",
      active: false
    },
    {
      id: 7,
      description: "Accessories",
      active: false
    }
  ]
});

export default Group;
