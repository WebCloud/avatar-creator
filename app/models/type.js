import DS from 'ember-data';

var Type = DS.Model.extend({
  group: DS.belongsTo('group'),
  parts: DS.hasMany('part'), // no need to make this async, most of the times the part type will be get from the avatar.get('parts').findBy('type', store.find('type', {description:'description'}))
  description: DS.attr(),
  mandatory: DS.attr('boolean')
});

Type.reopenClass({
  FIXTURES: [
    {
      id: 1,
      group: 1,
      description: "Body mandatory",
      mandatory: true
    },
    {
      id: 2,
      group: 2,
      description: "Face mandatory",
      mandatory: true
    },
    {
      id: 3,
      group: 3,
      description: "Eyes mandatory",
      mandatory: true
    },
    {
      id: 4,
      group: 4,
      description: "Hair optional",
      mandatory: false
    },
    {
      id: 5,
      group: 5,
      description: "Mouth mandatory",
      mandatory: true
    },
    {
      id: 6,
      group: 6,
      description: "Nose mandatory",
      mandatory: true
    },
    {
      id: 7,
      group: 7,
      description: "Accessory optional",
      mandatory: false
    }
  ]
});

export default Type;
