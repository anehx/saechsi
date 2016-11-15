import Route from 'ember-route'

export default Route.extend({
  model() {
    return this.store.createRecord('lecture')
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
