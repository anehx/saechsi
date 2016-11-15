import Route              from 'ember-route'
import $                  from 'jquery'
import service            from 'ember-service/inject'
import LoadingSliderMixin from '../mixins/loading-slider'

export default Route.extend(LoadingSliderMixin, {
  i18n: service(),

  beforeModel() {
    return this.get('session').fetch().catch(() => {})
  },

  afterModel() {
    $('body').removeClass('initializing')
  }
})
