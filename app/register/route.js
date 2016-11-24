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

  activate() {
    $('body').addClass('sign-in')
  },

  deactivate() {
    $('body').removeClass('sign-in')
  },

  actions: {
    async signUp() {
      try {
        let { email, password } = this.get('controller').getProperties('email', 'password')

        let res = await this.get('firebaseApp').auth().createUserWithEmailAndPassword(email, password)
      }
      catch (err) {
        console.log(err)
      }
    }
  }
})