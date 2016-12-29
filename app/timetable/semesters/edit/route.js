import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  model({ id }) {
    return this.store.findRecord('semester', id)
  },

  actions: {
    async delete() {
      try {
        this.send('loading')

        await this.get('currentModel').destroyRecord()
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
