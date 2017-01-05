import Service from 'ember-service'
import service from 'ember-service/inject'
import $       from 'jquery'

export default Service.extend({
  i18n: service('i18n'),
  moment: service('moment'),

  setLocale(locale) {
    let [ lang, country ] = locale.split('-')

    localStorage.setItem('locale', locale)
    this.get('i18n').set('locale', locale)
    this.get('moment').changeLocale(lang)
    console.log('set moment locale to', this.get('moment.locale'))
    $('html').attr('lang', lang)
  }
})
