import Component    from 'ember-component'
import computed     from 'ember-computed-decorators'
import service      from 'ember-service/inject'
import { gradeState }   from 'saechsi/helpers/grade-state'
import { htmlSafe } from 'ember-string'

const SxGradeComponent = Component.extend({
  i18n: service('i18n'),

  value: 0.0,
  size: 60,

  classNames: [ 'grade-ball' ],
  classNameBindings: [ 'state' ],
  attributeBindings: [ 'style' ],

  @computed('value')
  state(value) {
    return gradeState([ value ])
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
