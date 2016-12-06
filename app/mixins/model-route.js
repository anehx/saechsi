import Mixin from 'ember-metal/mixin'

export default Mixin.create({
  modelName:      '',
  templateName:   '',
  afterSaveRoute: '',
  backRoute:      '',

  _requiredProperties: [ 'afterSaveRoute', 'backRoute', 'templateName', 'modelName' ],

  init() {
    this._super(...arguments)

    this.get('_requiredProperties').forEach(p => {
      if (!this.get(p)) {
        throw new Error(`Property \`${p}\` must not be empty`)
      }
    })
  },

  renderTemplate() {
    this._super(...arguments)

    this.render(`${this.get('templateName')}.actions`, {
      into: 'protected',
      outlet: 'actions'
    })
  },

  activate() {
    this.controllerFor('protected').set('back', this.get('backRoute'))
  },

  model({ id }) {
    if (id) {
      return this.store.findRecord(this.get('modelName'), id)
    }

    return this.store.createRecord(this.get('modelName'))
  },

  deactivate() {
    this.get('currentModel').rollbackAttributes()

    this.controllerFor('protected').set('back', false)
  },

  actions: {
    async save() {
      try {
        await this.get('currentModel').save()

        this.transitionTo(this.get('afterSaveRoute'))
      }
      catch (e) {
        this.set('controller.error', e.message)
      }
    },

    async delete() {
      try {
        await this.get('currentModel').destroyRecord()

        this.transitionTo(this.get('afterSaveRoute'))
      }
      catch (e) {
        this.set('controller.error', e.message)
      }
      finally {
        this.set('controller.showDeleteDialog', false)
      }
    }
  }
})
