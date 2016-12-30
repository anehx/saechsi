import Component      from 'ember-component'
import computed       from 'ember-computed-decorators'
import service        from 'ember-service/inject'
import { gradeState } from 'saechsi/helpers/grade-state'
import { htmlSafe }   from 'ember-string'

const SxGradeCommentComponent = Component.extend({
  i18n: service('i18n'),

  value: 0.0,

  classNameBindings: [ 'state' ],

  @computed('value')
  state(value) {
    return gradeState([ value ])
  },

  @computed('state')
  comment(state) {
    return this.get('i18n').t(`comments.${state}`)
  }
})

SxGradeCommentComponent.reopenClass({
  positionalParams: [ 'value' ]
})

export default SxGradeCommentComponent
