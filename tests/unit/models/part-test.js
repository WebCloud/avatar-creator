import { test, moduleForModel } from 'ember-qunit';

moduleForModel('part', 'Part', {
  // Specify the other units that are required for this test.
  needs: ['model:category', 'model:avatar']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
