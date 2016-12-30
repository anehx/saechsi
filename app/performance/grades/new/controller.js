import Controller from 'ember-controller'
import computed   from 'ember-computed-decorators'

export default Controller.extend({
  step1: true,
  step2: false,
  step3: false,
  step4: false,

  @computed
  semesters() {
    return this.store.peekAll('semester').filterBy('active', true)
  },

  @computed
  subjects() {
    return this.store.peekAll('subject')
  },

  actions: {
    async setSemester(semester) {
      try {
        this.send('loading')

        await this.store.query('subject', { semester: semester.id })

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
      this.set('model.subject', subject)

      this.set('step2', false)
      this.set('step3', true)
    },

    setDate(date) {
      this.set('model.date', date)

      this.set('step3', false)
      this.set('step4', true)
    }
  }
})
