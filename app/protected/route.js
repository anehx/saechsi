import Route from 'ember-route'

export default Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login')
    }
  },

  actions: {
    logout() {
      this.get('session').close()

      this.transitionTo('login')
    }
  }
})
