import Route                     from 'ember-route'
import { translationMacro as t } from 'ember-i18n'
import ModelRouteMixin           from 'saechsi/mixins/model-route'
import TitleRouteMixin           from 'saechsi/mixins/title-route'

export default Route.extend(ModelRouteMixin, TitleRouteMixin, {
  title: t('semesters.edit'),

  modelName:      'semester',
  templateName:   'semesters.edit',
  afterSaveRoute: 'semesters.index',
  backRoute:      'semesters.index',

  beforeModel() {
    return this.store.findAll('school')
  }
})
