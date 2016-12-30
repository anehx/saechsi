import Controller from 'ember-controller'

export default Controller.extend({
  step1: true,
  step2: false,
  step3: false,

  semesters: [],
  subjects: [],

  async init() {
    this._super(...arguments)

    this.set('semesters', await this.store.findAll('semester'))
  },

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
