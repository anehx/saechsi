import Router from 'ember-router'
import config from './config/environment'

const AppRouter = Router.extend({
  location: config.locationType,
  rootURL:  config.rootURL
})

const resetNamespace = true

AppRouter.map(function() {
  this.route('login')

  this.route('protected', { path: '/' }, function() {
    this.route('index', { path: '/', resetNamespace })
    this.route('grades', { resetNamespace })
  })
})

export default AppRouter
