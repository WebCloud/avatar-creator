import DS from 'ember-data';

var Avatar = DS.Model.extend({
  image: DS.attr(),
  mappedImage: function(){
    return "/images/"+this.get('image');
  }.property('image'),
  parts: DS.hasMany('part', { async: true }),
  user: DS.belongsTo('user')
});

Avatar.reopenClass({
  FIXTURES: [{
    id: 1,
    user: 1,
    parts: [1, 2, 4, 6, 8, 10, 13],
    image: "swallow.svg"
  }]
});

export default Avatar;
