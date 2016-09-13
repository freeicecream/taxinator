import { moduleFor, test } from 'ember-qunit'; // eslint-disable-line

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function (assert) {
  const route = this.subject();
  assert.ok(route);
});
