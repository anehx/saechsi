import Component from 'ember-component'
import moment    from 'moment'

export default Component.extend({
  center: moment(),

  'on-select'() {},

  actions: {
    centerChange(value) {
      this.set('center', value.moment)
    },

    select(value) {
      this.attrs['on-select'](value.moment)
    }
  }
})
