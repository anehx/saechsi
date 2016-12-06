import Route      from 'ember-route'
import burgerMenu from 'ember-burger-menu'

export default Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login')
    }
  },

  setupController(controller) {
    this._super(...arguments)

    controller.set('back', false)
  },

  actions: {
    logout() {
      this.get('session').close()

      this.transitionTo('login')
    },

    willTransition() {
      burgerMenu.set('open', false)
    }
  }
})
