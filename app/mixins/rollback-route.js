import Mixin from 'ember-metal/mixin'

export default Mixin.create({
  async deactivate() {
    this._super(...arguments)

    if (this.get('currentModel.isNew')) {
      await this.get('currentModel').deleteRecord()
    }
    else {
      this.get('currentModel').rollbackAttributes()
    }
  }
})
