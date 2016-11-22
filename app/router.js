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

  this.route('protected', { path: '/' }, function() {
    this.route('index', { path: '/', resetNamespace })
    this.route('grades', { resetNamespace }, function() {
      this.route('new');
    })

    this.route('lectures', { resetNamespace }, function() {
      this.route('new')
      this.route('edit', { path: '/edit/:id' })
      this.route('delete', { path: '/delete/:id' })
    })
  })
  this.route('schools', function() {
    this.route('edit');
    this.route('new');
  });
  this.route('semesters', function() {
    this.route('new');
    this.route('edit');
  });
  this.route('goals', function() {
    this.route('edit');
    this.route('new');
  });
  this.route('register');
})

export default AppRouter
