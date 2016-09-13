import Ember from 'ember'; // eslint-disable-line
import loadInitializers from 'ember-load-initializers';

import Resolver from './resolver';
import config from './config/environment';

let App; // eslint-disable-line import/no-mutable-exports

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({ // eslint-disable-line prefer-const
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
});

loadInitializers(App, config.modulePrefix);

export default App;
