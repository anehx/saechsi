import Route                     from 'ember-route'
import { translationMacro as t } from 'ember-i18n'
import ModelRouteMixin           from 'saechsi/mixins/model-route'
import TitleRouteMixin           from 'saechsi/mixins/title-route'

export default Route.extend(ModelRouteMixin, TitleRouteMixin, {
  title: t('schools.new'),

  modelName:      'school',
  templateName:   'schools.edit',
  afterSaveRoute: 'schools.index',
  backRoute:      'schools.index'
})
