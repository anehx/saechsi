import Component       from 'ember-component'
import roundDecimal    from 'saechsi/utils/round'
import { formatGrade } from 'saechsi/helpers/format-grade'
import { gradeState }  from 'saechsi/helpers/grade-state'

import computed, {
  readOnly
} from 'ember-computed-decorators'

export default Component.extend({
  classNameBindings: [ 'state' ],

  value: null,

  @readOnly
  @computed('value')
  parsed(value) {
    return formatGrade([ value ])
  },

  @computed('value')
  state(value) {
    return gradeState([ value ])
  },

  @computed('value')
  allowPlus(value) {
    return value < 6
  },

  @computed('value')
  allowMinus(value) {
    return value > 1
  },

  actions: {
    plus() {
      if (this.get('allowPlus')) {
        this.set('value', roundDecimal(this.get('value') + 0.1))
      }
    },

    minus() {
      if (this.get('allowMinus')) {
        this.set('value', roundDecimal(this.get('value') - 0.1))
      }
    }
  }
})
