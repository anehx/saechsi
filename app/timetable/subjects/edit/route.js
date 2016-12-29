import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  beforeModel() {
    return this.store.findAll('semester')
  },

  model({ id }) {
    return this.store.findRecord('subject', id)
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

    async delete() {
      try {
        this.send('loading')

        let semester = this.get('currentModel.semester.id')

        await this.get('currentModel').destroyRecord()

        this.transitionTo('timetable.subjects', { queryParams: { semester } })
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
