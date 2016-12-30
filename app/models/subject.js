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
  },

  async save() {
    await this._super(...arguments)

    let semester = await this.store.findRecord('semester', this.get('semester.id'))

    semester.get('subjects').addObject(this)

    await semester.save()
  },

  async cleanDelete() {
    let semester = await this.store.findRecord('semester', this.get('semester.id'))

    semester.get('subjects').removeObject(this)

    await semester.save()

    let grades = await this.store.query('grade', { orderBy: 'subject', equalTo: this.id })
    let goals  = await this.store.query('goal', { orderBy: 'subject', equalTo: this.id })

    await grades.forEach(async(grade) => {
      await grade.destroyRecord()
    })

    await goals.forEach(async(goal) => {
      await goal.destroyRecord()
    })

    await this.destroyRecord()
  }
})
