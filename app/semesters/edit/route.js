import Route           from 'ember-route'
import computed        from 'ember-computed'
import ModelRouteMixin from 'saechsi/mixins/model-route'

export default Route.extend(ModelRouteMixin, {
  modelName:      'semester',
  templateName:   'semesters.edit',
  afterSaveRoute: 'semesters.index',

  beforeModel() {
    return this.store.findAll('school')
  }
})
