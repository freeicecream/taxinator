import Ember from 'ember'; // eslint-disable-line
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(() => undefined);

export default Router;
