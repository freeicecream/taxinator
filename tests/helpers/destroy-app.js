import Ember from 'ember'; // eslint-disable-line

export default function destroyApp(application) {
  Ember.run(application, 'destroy');
}
