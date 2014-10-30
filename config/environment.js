/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'project-uno-web',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'connect-src': "'self' http://localhost:3000",
      // 'default-src': "'none'",
      // 'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      // 'font-src': "'self' data: use.typekit.net",
      // 'img-src': "'self' www.facebook.com p.typekit.net",
      // 'style-src': "'self' 'unsafe-inline' use.typekit.net",
      // 'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.adapterHost = 'http://localhost:3000'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.adapterHost = 'http://localhost:3000'
  }

  if (environment === 'production') {

  }

  return ENV;
};
