import Model from 'ember-data/model'
import attr  from 'ember-data/attr'

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
  goals:    hasMany('goal')
})
