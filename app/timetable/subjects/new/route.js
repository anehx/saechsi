import Route              from 'ember-route'
import ToolbarRouteMixin  from 'saechsi/mixins/toolbar-route'
import RollbackRouteMixin from 'saechsi/mixins/rollback-route'

export default Route.extend(ToolbarRouteMixin, RollbackRouteMixin, {
  beforeModel() {
    return this.store.findAll('semester')
  },

  model() {
    let semester = this.store.peekRecord(
      'semester',
      this.controllerFor('timetable.subjects.index').get('semester')
    )

    return this.store.createRecord('subject', { semester })
  },

  setupController(controller) {
    this._super(...arguments)

    controller.set('semesters', this.store.peekAll('semester'))
  },

  actions: {
    async save() {
      try {
        this.send('loading')

        let semester = this.get('currentModel.semester.id') || null

        await this.get('currentModel').save()

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
