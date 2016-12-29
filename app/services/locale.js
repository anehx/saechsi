import Service from 'ember-service'
import service from 'ember-service/inject'
import moment  from 'moment'
import $       from 'jquery'

export default Service.extend({
  i18n: service('i18n'),

  setLocale(locale) {
    let [ lang, country ] = locale.split('-')

    localStorage.setItem('locale', locale)
    this.get('i18n').set('locale', locale)
    moment.lang(lang)
    $('html').attr('lang', lang)
  }
})
