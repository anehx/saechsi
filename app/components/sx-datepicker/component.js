import Component from 'ember-component'

export default Component.extend({
  placeholder: '',

  valid: true,

  'on-select'() {},

  actions: {
    select(value) {
      this.attrs['on-select'](value)
    }
  }
})
