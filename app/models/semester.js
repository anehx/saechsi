import Model    from 'ember-data/model'
import attr     from 'ember-data/attr'
import moment   from 'moment'
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
  name: validator('presence', true)
})

export default Model.extend(Validations, {
  name:     attr('string'),
  from:     attr('moment'),
  to:       attr('moment'),
  subjects: hasMany('subject'),

  @computed('from', 'to')
  active(from, to) {
    let now = moment()

    return now < to && now > from
  },

  @computed('subjects.[]')
  average(subjects) {
    let countable = subjects.filter(s => s.get('average'))
    let len       = countable.get('length')
    let sum       = countable.reduce((avg, subject) => {
      avg += subject.get('average') // eslint-disable-line no-param-reassign

      return avg
    }, 0)

    return len ? sum / len : 0
  }
})
