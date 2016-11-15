import Route from 'ember-route'

export default Route.extend({
  model({ id }) {
    return this.store.findRecord('lecture', id)
  },

  actions: {
    async save() {
      try {
        this.send('loading')

        await this.get('currentModel').save()

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
