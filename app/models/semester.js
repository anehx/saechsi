import Model from 'ember-data/model'
import attr  from 'ember-data/attr'

import {
  belongsTo,
  hasMany
} from 'ember-data/relationships'

export default Model.extend({
  name:     attr('string'),
  from:     attr('date'),
  to:       attr('date'),
  school:   belongsTo('school'),
  lectures: hasMany('lecture')
})
