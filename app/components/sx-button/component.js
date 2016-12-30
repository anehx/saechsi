import Component from 'ember-component'

export default Component.extend({
  tagName: 'button',
  type: 'button',

  attributeBindings: [ 'type' ],
  classNameBindings: [ 'primary', 'error', 'warning', 'success', 'enabled::disabled' ],

  enabled: true,

  primary: false,
  error: false,
  warning: false,
  success: false
})
