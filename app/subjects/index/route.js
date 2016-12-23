import Route                     from 'ember-route'
import { translationMacro as t } from 'ember-i18n'
import TitleRouteMixin           from 'saechsi/mixins/title-route'

export default Route.extend(TitleRouteMixin, {
  title: t('subjects.index'),

  beforeModel() {
    return this.store.findAll('semester')
  },

  model() {
    return this.store.findAll('subject')
  }
})
