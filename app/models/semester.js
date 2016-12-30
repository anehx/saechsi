import Model               from 'ember-data/model'
import attr                from 'ember-data/attr'
import moment              from 'moment'
import computed, {oneWay}            from 'ember-computed-decorators'
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
  from: [
    validator('date', { precision: 'day' }),
    validator('presence', true)
  ],
  to: [
    validator('date', { precision: 'day', @oneWay('model.from') after: null }),
    validator('presence', true)
  ]
})

export default Model.extend(ValidatedModelMixin, Validations, {
  name:     attr('string'),
  from:     attr('moment'),
  to:       attr('moment'),
  goals:    hasMany('goal', { inverse: null }),
  subjects: hasMany('subject', { inverse: null }),

  @computed('from', 'to')
  active(from, to) {
    let now = moment()

    return now < to && now > from
  },

  @computed('subjects.@each.average')
  average(subjects) {
    let averages = subjects.mapBy('average').filter(parseFloat)
    let sum      = averages.reduce((s, avg) => s + avg, 0)

    return roundDecimal(sum / averages.length) || 0
  }
})
