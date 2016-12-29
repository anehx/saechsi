import Route             from 'ember-route'
import LoadingRouteMixin from 'saechsi/mixins/loading-route'

export default Route.extend(LoadingRouteMixin, {
  async beforeModel() {
    try {
      await this.get('session').fetch()
    }
    catch (e) {
      return
    }
  }
})
