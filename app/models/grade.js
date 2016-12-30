import Model               from 'ember-data/model'
import attr                from 'ember-data/attr'
import { belongsTo }       from 'ember-data/relationships'
import ValidatedModelMixin from 'saechsi/mixins/validated-model'

import {
  validator,
  buildValidations
} from 'ember-cp-validations'

const Validations = buildValidations({
  score: [
    validator('presence', true),
    validator('number', { gt: 1, lte: 6 })
  ],
  subject: validator('presence', true),
  date: validator('date', { precision: 'day' })
})

export default Model.extend(ValidatedModelMixin, Validations, {
  score:   attr('number', { defaultValue: 4.5 }),
  date:    attr('moment'),
  subject: belongsTo('subject'),

  async save() {
    await this._super(...arguments)

    let subject = await this.store.findRecord('subject', this.get('subject.id'))

    subject.get('grades').addObject(this)

    await subject.save()
  },

  async cleanDelete() {
    let subject = await this.store.findRecord('subject', this.get('subject.id'))

    subject.get('grades').removeObject(this)

    await subject.save()

    await this.destroyRecord()
  }
})
