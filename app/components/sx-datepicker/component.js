import Component from 'ember-component'

export default Component.extend({
  placeholder: '',

  'on-select'() {},

  actions: {
    select(value) {
      this.attrs['on-select'](value)
    }
  }
})
