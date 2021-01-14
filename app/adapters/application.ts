import RESTAdapter from '@ember-data/adapter/rest';
import config from 'coolgirl-frontend/config/environment';
import window from 'ember-window-mock';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = config.apiNamespace;

  host =
    config.environment === 'testing' || window.location.pathname === '/tests' ? '' : config.apiHost;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    application: ApplicationAdapter;
  }
}
