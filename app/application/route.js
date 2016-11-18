import Route              from 'ember-route'
import $                  from 'jquery'
import service            from 'ember-service/inject'
import LoadingSliderMixin from '../mixins/loading-slider'
import SplashscreenMixin  from 'ember-cordova/mixins/device/splashscreen'

export default Route.extend(LoadingSliderMixin, SplashscreenMixin, {
  i18n: service(),

  async beforeModel() {
    try {
      await this.get('session').fetch()
    }
    catch (e) {
      return
    }
  },

  afterModel() {
    $('body').removeClass('initializing')
  }
})
