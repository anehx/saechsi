import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  queryParams: {
    semester: { refreshModel: true }
  },

  beforeModel() {
    return Promise.all([
      this.store.findAll('semester'),
      this.store.findAll('subject')
    ])
  },

  async model({ semester }) {
    if (!semester) return []

    return this.store.query('subject', { orderBy: 'semester', equalTo: semester })
  },

  setupController(controller) {
    this._super(...arguments)

    controller.set('semesters', this.store.peekAll('semester'))
  }
})
