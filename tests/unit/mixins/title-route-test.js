import Ember from 'ember';
import TitleRouteMixinMixin from 'saechsi/mixins/title-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | title route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let TitleRouteMixinObject = Ember.Object.extend(TitleRouteMixinMixin);
  let subject = TitleRouteMixinObject.create();
  assert.ok(subject);
});
