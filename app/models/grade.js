import Model         from 'ember-data/model'
import attr          from 'ember-data/attr'
import { belongsTo } from 'ember-data/relationships'

import computed, {
  readOnly
} from 'ember-computed-decorators'

export default Model.extend({
  name:      attr('string'),
  score:     attr('number'),
  weighting: attr('number'),
  date:      attr('date'),
  lecture:   belongsTo('lecture'),

  @readOnly
  @computed('lecture.name', 'lecture.grades.length')
  nameSuggestion(lecture, count) {
    const next = parseInt(count, 10) + 1

    return `${lecture} ${next}`
  }
})
