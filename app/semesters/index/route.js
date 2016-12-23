import Route                     from 'ember-route'
import computed                  from 'ember-computed'
import { translationMacro as t } from 'ember-i18n'
import TitleRouteMixin           from 'saechsi/mixins/title-route'


export default Route.extend(TitleRouteMixin, {
  title: t('semesters.index'),

  model() {
    return this.store.findAll('semester')
  }
})
