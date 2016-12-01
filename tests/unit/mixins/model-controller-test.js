import Ember from 'ember';
import ModelControllerMixin from 'saechsi/mixins/model-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | model controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let ModelControllerObject = Ember.Object.extend(ModelControllerMixin);
  let subject = ModelControllerObject.create();
  assert.ok(subject);
});
