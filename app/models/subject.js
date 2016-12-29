import Model    from 'ember-data/model'
import attr     from 'ember-data/attr'
import computed from 'ember-computed-decorators'

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

export default Model.extend(Validations, {
  name:     attr('string'),
  semester: belongsTo('semester'),
  grades:   hasMany('grade'),
  goals:    hasMany('goal'),

  @computed('grades.[]')
  average(grades) {
    let len = grades.get('length')
    let sum = grades.reduce((avg, grade) => {
      avg += grade.get('score') // eslint-disable-line no-param-reassign

      return avg
    }, 0)

    return len ? sum / len : 0
  }
})
