import Route             from 'ember-route'
import LoadingRouteMixin from 'saechsi/mixins/loading-route'

export default Route.extend(LoadingRouteMixin, {
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.replaceWith('trends')
    }
  }
})
