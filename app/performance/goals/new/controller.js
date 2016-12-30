import Controller from 'ember-controller'
import computed   from 'ember-computed-decorators'

export default Controller.extend({
  step1: true,
  step2: false,
  step3: false,

  @computed
  semesters() {
    return this.store.findAll('semester')
  },

  subjects: [],

  actions: {
    async setSemester(semester) {
      try {
        this.send('loading')

        this.set('model.semester', semester)
        this.set('subjects', await this.store.query('subject', { orderBy: 'semester', equalTo: semester.id }))

        this.set('step1', false)
        this.set('step2', true)
      }
      catch (e) {
        console.log(e)
      }
      finally {
        this.send('finished')
      }
    },

    setSubject(subject) {
      if (subject) {
        this.set('model.subject', subject)
        this.set('model.semester', null)
      }

      this.set('step2', false)
      this.set('step3', true)
    }
  }
})
