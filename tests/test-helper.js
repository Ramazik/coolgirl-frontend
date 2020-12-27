import Application from 'coolgirl-frontend/app';
import config from 'coolgirl-frontend/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
