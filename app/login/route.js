import Route from 'ember-route'
import $     from 'jquery'

export default Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.replaceWith('index')
    }
  },

  activate() {
    $('body').addClass('sign-in')
  },

  deactivate() {
    $('body').removeClass('sign-in')
  },

  actions: {
    async signIn() {
      let provider = 'password'
      let email    = this.get('controller.email')
      let password = this.get('controller.password')

      try {
        this.send('loading')

        await this.get('session').open('firebase', { provider, email, password })

        this.transitionTo('index')
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
