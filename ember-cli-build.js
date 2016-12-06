/* global require, module */

'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const funnel   = require('broccoli-funnel')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      optional: [ 'es7.decorators', 'es7.asyncFunctions' ],
      includePolyfill: true
    }
  })

  return app.toTree()
}
