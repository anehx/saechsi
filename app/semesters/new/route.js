import Route                     from 'ember-route'
import moment                    from 'moment'
import { translationMacro as t } from 'ember-i18n'
import ModelRouteMixin           from 'saechsi/mixins/model-route'
import TitleRouteMixin           from 'saechsi/mixins/title-route'

export default Route.extend(ModelRouteMixin, TitleRouteMixin, {
  title: t('semesters.new'),

  modelName:      'semester',
  templateName:   'semesters.edit',
  controllerName: 'semesters.edit',
  afterSaveRoute: 'semesters.index',
  backRoute:      'semesters.index',

  afterModel(semester) {
    let middleOfYear = moment().endOf('year').subtract(6, 'months')
    let now          = moment()
    let part         = now >= middleOfYear ? 2 : 1

    semester.set('name', `${now.get('year')} / ${part}`)
  }
})
