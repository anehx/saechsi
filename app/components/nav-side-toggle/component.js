import Component from 'ember-component'

export default Component.extend({
  tagName: 'button',

  'on-click'() {},

  click(e) {
    e.preventDefault()

    this.attrs['on-click']()
  }
})
