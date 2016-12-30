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
    validator('number', { gt: 1, lte: 6 }),
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

  @computed('score', 'subject.average', 'subject.grades.length')
  needed(score, avg) {
    return roundDecimal(avg && score * 2 - avg)
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
