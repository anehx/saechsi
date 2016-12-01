import Route    from 'ember-route'
import computed from 'ember-computed'

export default Route.extend({
  beforeModel() {
    return this.store.findAll('school')
  },

  model() {
    return this.store.findAll('semester')
  },

  setupController(controller) {
    this._super(...arguments)

    controller.set('schools', computed(() => { return this.store.peekAll('school') }))
  }
})
