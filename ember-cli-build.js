/* global require, module */

'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const funnel   = require('broccoli-funnel')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      optional: [ 'es7.decorators', 'es7.asyncFunctions' ],
      includePolyfill: true
    },
    lessOptions: {
      paths: [
        'bower_components/bootstrap/less',
        'bower_components/flat-ui/less'
      ]
    }
  })

  let fonts = funnel('bower_components/flat-ui/fonts', { destDir: '/fonts' })

  return app.toTree([ fonts ])
}
