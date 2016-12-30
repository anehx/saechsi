import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  async model() {
    let semesters = await this.store.findAll('semester')

    return semesters.sortBy('from', 'name').reverse()
  }
})
