import Router from 'ember-router'
import config from './config/environment'

const AppRouter = Router.extend({
  location: config.locationType,
  rootURL:  config.rootURL
})

const resetNamespace = true

/* eslint-disable max-nested-callbacks */
AppRouter.map(function() {
  this.route('sign', function() {
    this.route('in')
    this.route('up')
  })

  this.route('protected', { path: '/' }, function() {
    this.route('trends', { path: '/', resetNamespace })

    this.route('performance', { resetNamespace }, function() {
      this.route('grades')
      this.route('goals')
    })

    this.route('timetable', { resetNamespace }, function() {
      this.route('semesters', function() {
        this.route('new')
        this.route('edit', { path: '/:id' })
      })
      this.route('subjects')
    })

    this.route('settings', { resetNamespace })
    this.route('logout', { resetNamespace })
  })
})

export default AppRouter
