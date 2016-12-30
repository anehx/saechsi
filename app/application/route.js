import Route             from 'ember-route'
import service           from 'ember-service/inject'
import LoadingRouteMixin from 'saechsi/mixins/loading-route'

export default Route.extend(LoadingRouteMixin, {
  i18n: service('i18n'),
  locale: service('locale'),
  splash: service('device/splashscreen'),

  async beforeModel() {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', this.get('i18n.locale'))
    }
    else {
      this.get('locale').setLocale(localStorage.getItem('locale'))
    }

    try {
      await this.get('session').fetch()
    }
    catch (e) {
      return
    }
  },

  afterModel() {
    this.get('splash').hide()
  }
})
