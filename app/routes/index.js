import Ember from 'ember'; // eslint-disable-line

export default Ember.Route.extend({
  beforeModel(...args) {
    this._super(args); // eslint-disable-line no-underscore-dangle
    this.replaceWith('dashboard');
  },
});
