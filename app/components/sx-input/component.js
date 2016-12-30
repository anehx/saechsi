import TextFieldComponent from 'ember-components/text-field'
import computed from 'ember-computed-decorators'

export default TextFieldComponent.extend({
  type: 'text',

  classNameBindings: [ 'isValid::invalid' ],

  valid: true,

  doValidation: false,

  focusOut(e) {
    this.set('doValidation', true)
  },

  input(e) {
    this._super(...arguments)

    this.set('doValidation', true)
  },

  @computed('valid', 'doValidation')
  isValid(valid, doValidation) {
    if (!doValidation) return true

    return valid
  }
})
