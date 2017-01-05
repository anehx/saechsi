import Model               from 'ember-data/model'
import attr                from 'ember-data/attr'
import { belongsTo }       from 'ember-data/relationships'
import ValidatedModelMixin from 'saechsi/mixins/validated-model'
import roundDecimal        from 'saechsi/utils/round'
import computed            from 'ember-computed-decorators'

import {
  validator,
  buildValidations
} from 'ember-cp-validations'

const Validations = buildValidations({
  score: [
    validator('number', { gte: 1, lte: 6 }),
    validator('presence', true)
  ]
})

export default Model.extend(ValidatedModelMixin, Validations, {
  score:    attr('number', { defaultValue: 4.5 }),
  semester: belongsTo('semester'),
  subject:  belongsTo('subject'),

  @computed('semester.name', 'subject.name')
  name(semester, subject) {
    return semester || subject
  },

  @computed('semester.average', 'subject.average')
  reached(semester, subject) {
    return semester || subject
  },

  @computed('score', 'subject.grades.@each.score', 'subject.grades.length')
  needed(score, grades, count) {
    let x = score * count + score - grades.reduce((sum, grade) => sum + grade.get('score'), 0)

    return roundDecimal(x)
  },

  async save() {
    await this._super(...arguments)

    if (this.get('semester.id')) {
      let semester = await this.store.findRecord('semester', this.get('semester.id'))

      semester.get('goals').addObject(this)

      await semester.save()
    }

    if (this.get('subject.id')) {
      let subject = await this.store.findRecord('subject', this.get('subject.id'))

      subject.get('goals').addObject(this)

      await subject.save()
    }
  },

  async cleanDelete() {
    if (this.get('semester.id')) {
      let semester = await this.store.findRecord('semester', this.get('semester.id'))

      semester.get('goals').removeObject(this)

      await semester.save()
    }

    if (this.get('subject.id')) {
      let subject = await this.store.findRecord('subject', this.get('subject.id'))

      subject.get('goals').removeObject(this)

      await subject.save()
    }

    await this.destroyRecord()
  }
})
