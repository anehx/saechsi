import Mixin from 'ember-metal/mixin'

export default Mixin.create({
  actions: {
    loading(transition, originRoute) {
      let controller = this.controllerFor(this.get('routeName'))
      controller.set('loading', true)

      if (transition) {
        transition.promise.finally(() => {
          this.send('finished')
        })
      }
    },

    finished() {
      let controller = this.controllerFor(this.get('routeName'))
      controller.set('loading', false)
    }
  }
})
