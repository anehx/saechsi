/* global require, module */

'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const funnel   = require('broccoli-funnel')

module.exports = defaults => {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/Ionicons/scss/',
        'bower_components/normalize-scss/sass/'
      ]
    },
    babel: {
      optional: [ 'es7.decorators', 'es7.asyncFunctions' ],
      includePolyfill: true
    }
  })

  let ionicons = funnel('bower_components/Ionicons/fonts/', { destDir: '/fonts' })

  return app.toTree([ ionicons ])
}
