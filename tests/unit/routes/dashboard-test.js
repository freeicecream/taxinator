import { moduleFor, test } from 'ember-qunit'; // eslint-disable-line

moduleFor('route:dashboard', 'Unit | Route | dashboard', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function (assert) {
  const route = this.subject();
  assert.ok(route);
});
