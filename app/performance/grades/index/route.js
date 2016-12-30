import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  async model() {
    let grades = await this.store.findAll('grade')

    return grades.sortBy('date').reverse()
  }
})
