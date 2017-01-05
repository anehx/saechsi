/* global module */

"use strict"

module.exports = function(environment) {
  let ENV = {
    environment,

    modulePrefix: 'saechsi',
    rootURL: '',
    locationType: 'hash',

    firebase: {
      apiKey: 'AIzaSyBxEwOoyG40YQu6G9-OsEZOmG-gvBeaKlM',
      authDomain: 'saechsi-b9703.firebaseapp.com',
      databaseURL: 'https://saechsi-b9703.firebaseio.com',
      storageBucket: 'saechsi-b9703.appspot.com',
      messagingSenderId: '127441807291'
    },

    torii: {
      sessionServiceName: 'session'
    },

    i18n: {
      defaultLocale: 'de-ch'
    },

    moment: {
      includeLocales: [ 'de', 'en' ]
    },

    webFontConfig: {
      google: {
        families: [ 'Quicksand' ]
      }
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {
    // production settings
  }

  return ENV
}
