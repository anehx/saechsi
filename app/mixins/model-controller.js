import Mixin from 'ember-metal/mixin'

export default Mixin.create({
  actions: {
    setRef(name, id, model) {
      this.set(`model.${name}`, this.store.peekRecord(model || name , id))
    }
  }
})
