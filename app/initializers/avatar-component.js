export default {
  name: 'avatar-component',

  initialize: function(container/*, app*/) {
    container.injection('component', 'store', 'store:main');
  }
};
