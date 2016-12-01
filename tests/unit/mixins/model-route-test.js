import Ember from 'ember';
import ModelRouteMixin from 'saechsi/mixins/model-route';
import { module, test } from 'qunit';

module('Unit | Mixin | model route');

// Replace this with your real tests.
test('it works', function(assert) {
  let ModelRouteObject = Ember.Object.extend(ModelRouteMixin);
  let subject = ModelRouteObject.create();
  assert.ok(subject);
});
