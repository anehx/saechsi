import Controller                      from 'ember-controller'
import computed                        from 'ember-computed-decorators'
import { validator, buildValidations } from 'ember-cp-validations'

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: validator('presence', true)
})

export default Controller.extend(Validations, {
  email: '',
  password: ''
})
