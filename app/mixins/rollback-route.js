import Mixin from 'ember-metal/mixin'

export default Mixin.create({
  deactivate() {
    this._super(...arguments)

    if (this.get('currentModel.isNew')) {
      this.get('currentModel').deleteRecord()
    }
    else {
      this.get('currentModel').rollbackAttributes()
    }
  },
})
