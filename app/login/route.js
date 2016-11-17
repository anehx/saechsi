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
    signIn() {
      let provider = 'password'
      let email    = this.get('controller.email')
      let password = this.get('controller.password')

      this.get('session').open('firebase', { provider, email, password })
        .then(data => {
          this.set('session.user', data.currentUser)
          this.transitionTo('index')
        })
        .catch(error => {
          this.set('controller.error', error.message)
        })
    }
  }
})
