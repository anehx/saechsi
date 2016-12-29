import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  beforeModel() {
    return this.store.findAll('semester')
  },

  model() {
    return this.store.createRecord('subject')
  },

  setupController(controller) {
    this._super(...arguments)

    controller.set('semesters', this.store.peekAll('semester'))
  },

  actions: {
    async save() {
      try {
        this.send('loading')

        await this.get('currentModel').save()

        this.transitionTo('timetable.subjects', { queryParams: { semester: this.get('currentModel.semester.id') } })
      }
      catch (e) {
        console.log(e)
      }
      finally {
        this.send('finished')
      }
    },

    setSemester(id) {
      this.set('currentModel.semester', this.store.peekRecord('semester', id))
    }
  }
})
