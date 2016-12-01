import Controller           from 'ember-controller'
import computed             from 'ember-computed-decorators'
import ModelControllerMixin from 'saechsi/mixins/model-controller'

export default Controller.extend(ModelControllerMixin, {
  @computed
  schools() {
    return this.store.peekAll('school')
  },

  filter() {
    console.log(arguments)
  }
})
