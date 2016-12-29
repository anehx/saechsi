import Controller   from 'ember-controller'
import { filterBy } from 'ember-computed-decorators'

export default Controller.extend({
  @filterBy('model', 'active', true)
  activeSemesters: [],

  @filterBy('model', 'active', false)
  inactiveSemesters: []
})
