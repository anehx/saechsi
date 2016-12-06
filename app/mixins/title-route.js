import Mixin   from 'ember-metal/mixin'
import service from 'ember-service/inject'

export default Mixin.create({
  i18n: service('i18n'),

  activate() {
    this._super(...arguments)

    this.controllerFor('protected').set('title', this.get('title'))
  },

  deactivate() {
    this._super(...arguments)

    this.controllerFor('protected').set('title', '')
  }
})
