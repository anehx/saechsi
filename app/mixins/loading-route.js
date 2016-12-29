import Mixin from 'ember-metal/mixin'
import $     from 'jquery'

export default Mixin.create({
  actions: {
    loading(transition, originRoute) {
      $('body').addClass('loading')

      if (transition) {
        transition.promise.finally(() => {
          $('body').removeClass('loading')
        })
      }
    },

    finished() {
      $('body').removeClass('loading')
    }
  }
})
