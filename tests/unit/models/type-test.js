import { test, moduleForModel } from 'ember-qunit';

moduleForModel('type', 'Type', {
  // Specify the other units that are required for this test.
  needs: ['model:group', 'model:part']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
