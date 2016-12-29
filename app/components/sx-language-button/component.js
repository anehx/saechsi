import Component from 'ember-component'
import computed  from 'ember-computed-decorators'
import service   from 'ember-service/inject'
import moment    from 'moment'

const SxLanguageButtonComponent = Component.extend({
  i18n: service('i18n'),
  localeSwitcher: service('locale'),

  classNameBindings: [ 'active' ],

  locale: null,

  @computed('i18n.locale', 'locale')
  active(current, locale) {
    return current === locale
  },

  @computed('locale')
  country(locale) {
    return locale.split('-')[1]
  },

  click(e) {
    this.get('localeSwitcher').setLocale(this.get('locale'))
  }
})

SxLanguageButtonComponent.reopenClass({
  positionalParams: [ 'locale' ]
})

export default SxLanguageButtonComponent
