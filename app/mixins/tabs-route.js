import Mixin from 'ember-metal/mixin'
import $     from 'jquery'

export default Mixin.create({
  activate() {
    this._super(...arguments)

    $('body').addClass('has-tabs')
  },

  deactivate() {
    this._super(...arguments)

    $('body').removeClass('has-tabs')
  },

  renderTemplate() {
    this._super(...arguments)

    this.render(`${this.get('routeName')}.tabs`, {
      into: 'protected',
      outlet: 'tabs'
    })
  }
})
