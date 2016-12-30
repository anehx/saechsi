import XSelectComponent       from 'ember-select/components/x-select'
import computed, { filterBy } from 'ember-computed-decorators'

export default XSelectComponent.extend({
  @filterBy('data', 'isDeleted', false)
  model: [],

  canSearch: false
})
