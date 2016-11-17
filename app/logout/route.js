import Route from 'ember-route'

export default Route.extend({
  async beforeModel() {
    await this.get('session').close()

    this.transitionTo('index')
  }
})
