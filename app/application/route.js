import Route from 'ember-route'

export default Route.extend({
  async beforeModel() {
    try {
      await this.get('session').fetch()
    }
    catch (e) {
      return
    }
  }
})
