import Route           from 'ember-route'
import ModelRouteMixin from 'saechsi/mixins/model-route'

export default Route.extend(ModelRouteMixin, {
  modelName:      'school',
  templateName:   'schools.edit',
  afterSaveRoute: 'schools.index'
})
