import Route              from 'ember-route'
import ToolbarRouteMixin  from 'saechsi/mixins/toolbar-route'
import RollbackRouteMixin from 'saechsi/mixins/rollback-route'

export default Route.extend(ToolbarRouteMixin, RollbackRouteMixin, {
  model() {
    return this.store.createRecord('goal')
  },

  actions: {
    async save() {
      try {
        this.send('loading')

        await this.get('currentModel').save()

        this.transitionTo('performance.goals.index')
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
