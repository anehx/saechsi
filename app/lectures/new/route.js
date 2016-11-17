import Route from 'ember-route'

export default Route.extend({
  model() {
    return this.store.createRecord('lecture')
  },

  deactivate() {
    this.get('currentModel').rollbackAttributes()
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
