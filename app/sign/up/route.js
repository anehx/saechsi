import Route   from 'ember-route'
import service from 'ember-service/inject'
import $       from 'jquery'

export default Route.extend({
  firebaseApp: service('firebaseApp'),

  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.replaceWith('index')
    }
  },

  actions: {
    async signUp() {
      try {
        this.send('loading')

        let { email, password } = this.get('controller').getProperties('email', 'password')

        let res = await this.get('firebaseApp').auth().createUserWithEmailAndPassword(email, password)

        await this.get('session').open('firebase', { provider: 'password', email, password })

        this.transitionTo('home')
      }
      catch (e) {
        this.set('controller.error', e)
      }
      finally {
        this.send('finished')
      }
    }
  }
})
