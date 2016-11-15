import Route from 'ember-route'

export default Route.extend({
  model({ id }) {
    return this.store.findRecord('lecture', id)
  },

  actions: {
    async delete() {
      try {
        this.send('loading')

        await this.get('currentModel').destroyRecord()

        this.transitionTo('lectures.index')
      }
      catch (e) {
        this.set('controller.error', e.message)
      }
      finally {
        this.send('finished')
      }
    }
  }
})
