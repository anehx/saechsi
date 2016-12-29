import Route             from 'ember-route'
import ToolbarRouteMixin from 'saechsi/mixins/toolbar-route'

export default Route.extend(ToolbarRouteMixin, {
  actions: {
    async signOut() {
      try {
        await this.get('session').close()

        this.transitionTo('sign.in')
      }
      catch (e) {
        console.log(e)
      }
    }
  }
})
