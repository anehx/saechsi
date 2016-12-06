import Route                     from 'ember-route'
import computed                  from 'ember-computed'
import { translationMacro as t } from 'ember-i18n'
import TitleRouteMixin           from 'saechsi/mixins/title-route'


export default Route.extend(TitleRouteMixin, {
  title: t('semesters.index'),

  beforeModel() {
    return this.store.findAll('school')
  },

  model() {
    return this.store.findAll('semester')
  },

  setupController(controller) {
    this._super(...arguments)

    controller.set('schools', computed(() => {
      return this.store.peekAll('school')
    }))
  }
})
