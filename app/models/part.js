import DS from 'ember-data';

var Parts = DS.Model.extend({
  type: DS.belongsTo('type'),
  avatars: DS.hasMany('avatars'), // no need to map this as async, it will load tons of avatarss for no good reason
  description: DS.attr(),
  seen: DS.attr('boolean'),
  image: DS.attr(),
  mappedImage: function(){
    return "/images/svgs/"+this.get('image');
  }.property('image'),
  thumbnail: function(){
    return "/images/svgs/thumbnails/"+this.get('image');
  }.property('image')
});

Parts.reopenClass({
  FIXTURES: [
    {
      id: 1,
      type: 1,
      avatars: [1],
      description: "Body 01",
      seen: false,
      image: "body-01.svg",
    },
    {
      id: 2,
      type: 2,
      avatars: [1],
      description: "Face 01",
      seen: false,
      image: "face-01.svg",
    },
    {
      id: 3,
      type: 2,
      avatars: [],
      description: "Face 02",
      seen: false,
      image: "face-02.svg",
    },
    {
      id: 4,
      type: 3,
      avatars: [1],
      description: "Eyes 01",
      seen: false,
      image: "eyes-01.svg",
    },
    {
      id: 5,
      type: 3,
      avatars: [],
      description: "Eyes 02",
      seen: false,
      image: "eyes-02.svg",
    },
    {
      id: 6,
      type: 4,
      avatars: [1],
      description: "Hair 01",
      seen: false,
      image: "hair-01.svg",
    },
    {
      id: 7,
      type: 4,
      avatars: [],
      description: "Hair 02",
      seen: false,
      image: "hair-02.svg",
    },
    {
      id: 8,
      type: 5,
      avatars: [1],
      description: "Mouth 01",
      seen: false,
      image: "mouth-01.svg",
    },
    {
      id: 9,
      type: 5,
      avatars: [],
      description: "Mouth 02",
      seen: false,
      image: "mouth-02.svg",
    },
    {
      id: 10,
      type: 6,
      avatars: [1],
      description: "Nose 01",
      seen: false,
      image: "nose-01.svg",
    },
    {
      id: 11,
      type: 6,
      avatars: [],
      description: "Nose 02",
      seen: false,
      image: "nose-02.svg",
    },
    {
      id: 12,
      type: 7,
      avatars: [],
      description: "Accessory 01",
      seen: false,
      image: "accessory-01.svg",
    },
    {
      id: 13,
      type: 7,
      avatars: [1],
      description: "Accessory 02",
      seen: false,
      image: "accessory-02.svg",
    }
  ]
});

export default Parts;
