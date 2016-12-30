import Route              from 'ember-route'
import ToolbarRouteMixin  from 'saechsi/mixins/toolbar-route'
import RollbackRouteMixin from 'saechsi/mixins/rollback-route'

export default Route.extend(ToolbarRouteMixin, RollbackRouteMixin, {
  beforeModel() {
    return Promise.all([
      this.store.findAll('semester'),
      this.store.findAll('subject')
    ])
  },

  model({ id }) {
    return this.store.findRecord('grade', id)
  },

  deactivate() {
    this.get('currentModel').rollbackAttributes()
  },

  actions: {
    async save() {
      try {
        this.send('loading')

        await this.get('currentModel').save()

        this.transitionTo('performance.grades.index')
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

        await this.get('currentModel').destroyRecord()

        this.transitionTo('performance.grades.index')
      }
      catch (e) {
        console.log(e)
      }
      finally {
        this.send('finished')
      }
    }
  }
})
