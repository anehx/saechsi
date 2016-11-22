import Router from 'ember-router'
import config from './config/environment'

const AppRouter = Router.extend({
  location: config.locationType,
  rootURL:  config.rootURL
})

const resetNamespace = true

/* eslint-disable max-nested-callbacks */
AppRouter.map(function() {
  this.route('login')
  this.route('logout')
  this.route('register')

  this.route('protected', { path: '/' }, function() {
    this.route('index', { path: '/', resetNamespace })

    this.route('grades', { resetNamespace }, function() {
      this.route('new')
      this.route('edit', { path: '/edit/:id' })
      this.route('delete', { path: '/delete/:id' })
    })

    this.route('lectures', { resetNamespace }, function() {
      this.route('new')
      this.route('edit', { path: '/edit/:id' })
      this.route('delete', { path: '/delete/:id' })
    })

    this.route('schools', { resetNamespace }, function() {
      this.route('new')
      this.route('edit', { path: '/edit/:id' })
      this.route('delete', { path: '/delete/:id' })
    })

    this.route('semesters', { resetNamespace }, function() {
      this.route('new')
      this.route('edit', { path: '/edit/:id' })
      this.route('delete', { path: '/delete/:id' })
    })

    this.route('goals', { resetNamespace }, function() {
      this.route('new')
      this.route('edit', { path: '/edit/:id' })
      this.route('delete', { path: '/delete/:id' })
    })
  })
})

export default AppRouter
