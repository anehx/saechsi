import Mixin from 'ember-metal/mixin'
import $     from 'jquery'

export default Mixin.create({
  activate() {
    this._super(...arguments)

    $('body').addClass('has-toolbar')
  },

  deactivate() {
    this._super(...arguments)

    $('body').removeClass('has-toolbar')
  },

  renderTemplate() {
    this._super(...arguments)

    this.render(`${this.get('routeName')}.toolbar`, {
      into: 'protected',
      outlet: 'toolbar'
    })
  }
})
