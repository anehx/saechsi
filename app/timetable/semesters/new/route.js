import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  model() {
    return this.store.createRecord('semester')
  },

  actions: {
    async save() {
      try {
        this.send('loading')

        await this.get('currentModel').save()

        this.transitionTo('timetable.semesters.index')
      }
      catch (err) {
        console.log(err)
      }
      finally {
        this.send('finished')
      }
    }
  }
})
