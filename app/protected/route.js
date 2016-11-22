import Route      from 'ember-route'
import burgerMenu from 'ember-burger-menu'

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
    },

    didTransition() {
      burgerMenu.set('open', false)
    }
  }
})
