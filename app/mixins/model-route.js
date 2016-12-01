import Mixin from 'ember-metal/mixin'

export default Mixin.create({
  modelName:      '',
  templateName:   '',
  afterSaveRoute: '',

  _requiredProperties: [ 'afterSaveRoute', 'templateName', 'modelName' ],

  init() {
    this._super(...arguments)

    this.get('_requiredProperties').forEach(p => {
      if (!this.get(p)) {
        throw new Error(`Property \`${p}\` must not be empty`)
      }
    })
  },

  model({ id }) {
    if (id) {
      return this.store.findRecord(this.get('modelName'), id)
    }

    return this.store.createRecord(this.get('modelName'))
  },

  deactivate() {
    this.get('currentModel').rollbackAttributes()
  },

  actions: {
    async save() {
      try {
        this.send('loading')

        await this.get('currentModel').save()

        this.transitionTo(this.get('afterSaveRoute'))
      }
      catch (e) {
        this.set('controller.error', e.message)
      }
      finally {
        this.send('finished')
      }
    }
  }
})
