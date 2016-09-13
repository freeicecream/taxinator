import {  // eslint-disable-line import/no-extraneous-dependencies
  setResolver,
} from 'ember-qunit';
import resolver from './helpers/resolver';

setResolver(resolver);
