import FirebaseAdapter from 'emberfire/adapters/firebase'
import service         from 'ember-service/inject'

export default FirebaseAdapter.extend({
  session: service('session'),

  pathForType(modelName) {
    const uid  = this.get('session.currentUser.uid')
    const path = this._super(...arguments)

    return `${uid}/${path}`
  }
})
