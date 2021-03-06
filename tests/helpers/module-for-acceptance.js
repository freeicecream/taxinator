import { module } from 'qunit'; // eslint-disable-line
import Ember from 'ember'; // eslint-disable-line
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

const { RSVP: { Promise } } = Ember;

export default function (name, options = {}) {
  module(name, {
    beforeEach(...args) {
      this.application = startApp();

      if (options.beforeEach) {
        return options.beforeEach.apply(this, args);
      }

      return undefined;
    },

    afterEach(...args) {
      const afterEach = options.afterEach && options.afterEach.apply(this, args);
      return Promise.resolve(afterEach).then(() => destroyApp(this.application));
    },
  });
}
