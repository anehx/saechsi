import Component from 'ember-component'
import $         from 'jquery'

export default Component.extend({
  didInsertElement() {
    $('body').addClass('has-tabs')
  },

  willDestroyElement() {
    $('body').removeClass('has-tabs')
  }
})
