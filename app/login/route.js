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

  setupController(controller) {
    this._super(...arguments)

    controller.set('error', '')
    controller.set('errorVisible', false)
  },

  actions: {
    login() {
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
          this.set('controller.errorVisible', true)
        })
    }
  }
})
