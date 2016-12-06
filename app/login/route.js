import Route from 'ember-route'
import $     from 'jquery'

export default Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.replaceWith('index')
    }
  },

  activate() {
    $('body').addClass('login')
  },

  deactivate() {
    $('body').removeClass('login')
  },

  actions: {
    async login() {
      let provider = 'password'
      let email    = this.get('controller.email')
      let password = this.get('controller.password')

      try {
        await this.get('session').open('firebase', { provider, email, password })

        this.transitionTo('index')
      }
      catch (e) {
        this.set('controller.error', e.message)
      }
    }
  }
})
