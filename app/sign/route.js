import Route from 'ember-route'

export default Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.replaceWith('trends')
    }
  }
})
