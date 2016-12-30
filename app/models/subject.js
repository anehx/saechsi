import Model               from 'ember-data/model'
import attr                from 'ember-data/attr'
import computed            from 'ember-computed-decorators'
import roundDecimal        from 'saechsi/utils/round'
import ValidatedModelMixin from 'saechsi/mixins/validated-model'

import {
  belongsTo,
  hasMany
} from 'ember-data/relationships'

import {
  validator,
  buildValidations
} from 'ember-cp-validations'

const Validations = buildValidations({
  name: validator('presence', true),
  semester: validator('presence', true)
})

export default Model.extend(ValidatedModelMixin, Validations, {
  name:     attr('string'),
  semester: belongsTo('semester'),
  goals:    hasMany('goal', { inverse: null }),
  grades:   hasMany('grade', { inverse: null }),

  @computed('grades.@each.score')
  average(grades) {
    let scores = grades.mapBy('score').filter(parseFloat)
    let sum    = scores.reduce((s, score) => s + score, 0)

    return roundDecimal(sum / scores.length) || 0
  }
})
