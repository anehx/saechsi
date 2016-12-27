import Route from 'ember-route'

export default Route.extend({
  beforeModel() {
    this.replaceWith('performance.grades')
  }
})
