import Route           from 'ember-route'
import ModelRouteMixin from 'saechsi/mixins/model-route'

export default Route.extend(ModelRouteMixin, {
  modelName:      'lecture',
  templateName:   'lectures.edit',
  afterSaveRoute: 'lectures.index'
})
