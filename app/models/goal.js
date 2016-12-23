import Model         from 'ember-data/model'
import attr          from 'ember-data/attr'
import { belongsTo } from 'ember-data/relationships'

import {
  validator,
  buildValidations
} from 'ember-cp-validations'

const Validations = buildValidations({
  score: [
    validator('number', { gt: 1, lte: 6 }),
    validator('presence', true)
  ]
})

export default Model.extend(Validations, {
  score:    attr('number'),
  subject:  belongsTo('subject'),
  semester: belongsTo('semester')
})
