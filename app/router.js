import Ember from 'ember'; // eslint-disable-line
import config from './config/environment'; // eslint-disable-line import/no-unresolved

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('dashboard');

  return undefined;
});

export default Router;
