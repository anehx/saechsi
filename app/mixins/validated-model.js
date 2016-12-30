import Mixin from 'ember-metal/mixin'

export default Mixin.create({
  save() {
    if (this.get('validations.isValid')) {
      this._super(...arguments)
    }
    else {
      throw new Error()
    }
  }
})
