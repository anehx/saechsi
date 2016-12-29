import Controller from 'ember-controller'
import computed   from 'ember-computed-decorators'

export default Controller.extend({
  queryParams: [ 'semester' ],

  semester: null,

  @computed
  semesters() {
    return this.store.peekAll('semester')
  }
})
