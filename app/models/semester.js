import Model                from 'ember-data/model'
import attr                 from 'ember-data/attr'
import moment               from 'moment'
import computed, { oneWay } from 'ember-computed-decorators'
import roundDecimal         from 'saechsi/utils/round'
import ValidatedModelMixin  from 'saechsi/mixins/validated-model'

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
  },

  async cleanDelete() {
    let subjects = await this.store.query('subject', { orderBy: 'semester', equalTo: this.id })
    let goals    = await this.store.query('goal', { orderBy: 'semester', equalTo: this.id })

    await subjects.forEach(async(subject) => {
      await subject.destroyRecord()

      let grades   = await this.store.query('grade', { orderBy: 'subject', equalTo: subject.id })
      let subGoals = await this.store.query('goal', { orderBy: 'subject', equalTo: subject.id })

      await grades.forEach(async(grade) => {
        await grade.destroyRecord()
      })

      await subGoals.forEach(async(goal) => {
        await goal.destroyRecord()
      })
    })

    await goals.forEach(async(goal) => {
      await goal.destroyRecord()
    })

    await this.destroyRecord()
  }
})
