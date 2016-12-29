import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  queryParams: {
    semester: { refreshModel: true }
  },

  beforeModel() {
    return this.store.findAll('semester')
  },

  async model({ semester }) {
    if (!semester) return []

    let subjects = await this.store.findAll('subject')

    return subjects.filter(s => s.get('semester.id') === semester)
  },

  setupController(controller) {
    this._super(...arguments)

    controller.set('semesters', this.store.peekAll('semester'))
  }
})
