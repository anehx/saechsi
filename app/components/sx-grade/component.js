import Component    from 'ember-component'
import computed     from 'ember-computed-decorators'
import service      from 'ember-service/inject'
import { htmlSafe } from 'ember-string'

const SxGradeComponent = Component.extend({
  i18n: service('i18n'),

  value: 0.0,
  size: 60,
  showComment: false,

  classNameBindings: [ 'state' ],

  breakpoints: {
    neutral: { min: 0.0, max: 0.0 },
    bad:     { min: 1.0, max: 3.9 },
    ok:      { min: 4.0, max: 4.9 },
    good:    { min: 5.0, max: 6.0 }
  },

  @computed('value')
  state(value) {
    return Object.keys(this.get('breakpoints')).find(breakpoint => {
      let cond = this.get(`breakpoints.${breakpoint}`)

      return value >= cond.min && value <= cond.max
    })
  },

  @computed('state')
  comment(state) {
    return this.get('i18n').t(`comments.${state}`)
  },

  @computed('size')
  style(size) {
    let w = size
    let h = size
    let f = size / 3

    return htmlSafe(`width:${w}px;height:${h}px;font-size:${f}px;`)
  }
})

SxGradeComponent.reopenClass({
  positionalParams: [ 'value' ]
})

export default SxGradeComponent
