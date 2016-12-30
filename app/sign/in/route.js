import Route from 'ember-route'
import $     from 'jquery'

export default Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.replaceWith('index')
    }
  },

  actions: {
    async signIn() {
      try {
        this.send('loading')

        let provider = 'password'
        let email    = this.get('controller.email')
        let password = this.get('controller.password')

        await this.get('session').open('firebase', { provider, email, password })

        this.transitionTo('home')
      }
      catch (e) {
        this.set('controller.error', e.message)
        console.log(e)
        console.log(e.code)
      }
      finally {
        this.send('finished')
      }
    }
  }
})
