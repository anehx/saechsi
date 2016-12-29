import Component from 'ember-component'

export default Component.extend({
  tagName: 'button',
  type: 'button',

  attributeBindings: [ 'type' ],
  classNameBindings: [ 'primary', 'error', 'warning', 'success' ],

  primary: false,
  error: false,
  warning: false,
  success: false
})
