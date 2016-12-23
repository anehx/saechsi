import Model         from 'ember-data/model'
import attr          from 'ember-data/attr'
import { belongsTo } from 'ember-data/relationships'

import {
  validator,
  buildValidations
} from 'ember-cp-validations'

const Validations = buildValidations({
  score: [
    validator('presence', true),
    validator('number', { gt: 1, lte: 6 })
  ],
  subject: validator('presence', true)
})

export default Model.extend(Validations, {
  score:   attr('number'),
  date:    attr('date'),
  subject: belongsTo('subject')
})
