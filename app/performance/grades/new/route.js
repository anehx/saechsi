import Route              from 'ember-route'
import ToolbarRouteMixin  from 'saechsi/mixins/toolbar-route'
import RollbackRouteMixin from 'saechsi/mixins/rollback-route'

export default Route.extend(ToolbarRouteMixin, RollbackRouteMixin, {
  beforeModel() {
    return this.store.findAll('semester')
  },

  model() {
    return this.store.createRecord('grade')
  },

  resetController(controller, isExiting) {
    this._super(...arguments)

    if (isExiting) {
      controller.setProperties({
        step1: true,
        step2: false,
        step3: false,
        step4: false
      })
    }
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
    }
  }
})
