import { test, moduleForModel } from 'ember-qunit';

moduleForModel('group', 'Group', {
  // Specify the other units that are required for this test.
  needs: ['model:category']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
