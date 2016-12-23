import Route                     from 'ember-route'
import computed                  from 'ember-computed'
import { translationMacro as t } from 'ember-i18n'
import ModelRouteMixin           from 'saechsi/mixins/model-route'
import TitleRouteMixin           from 'saechsi/mixins/title-route'

export default Route.extend(ModelRouteMixin, TitleRouteMixin, {
  title: t('subjects.new'),

  modelName:      'subject',
  templateName:   'subjects.edit',
  controllerName: 'subjects.edit',
  afterSaveRoute: 'subjects.index',
  backRoute:      'subjects.index',

  beforeModel() {
    return this.store.findAll('semester')
  },

  setupController() {
    this._super(...arguments)

    controller.set('semesters', computed(() => {
      return this.store.peekAll('semester')
    }))
  }
})
