import Route from 'ember-route'
import $     from 'jquery'
import service from 'ember-service/inject'

export default Route.extend({
  i18n: service(),

  beforeModel() {
    return this.get('session').fetch().catch(() => {})
  },

  afterModel() {
    $('body').removeClass('initializing')
  }
})
