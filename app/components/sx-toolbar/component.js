import Component from 'ember-component'
import $         from 'jquery'

export default Component.extend({
  didInsertElement() {
    $('body').addClass('has-toolbar')
  },

  willDestroyElement() {
    $('body').removeClass('has-toolbar')
  }
})
