import BsNavbar from 'ember-bootstrap/components/bs-navbar'
import service  from 'ember-service/inject'

export default BsNavbar.extend({
  session: service(),

  actions: {
    logout() {
      this.get('session').close()
    }
  }
})
