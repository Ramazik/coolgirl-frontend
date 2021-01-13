import RESTAdapter from '@ember-data/adapter/rest';
import config from 'coolgirl-frontend/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = config.apiNamespace;
  host = config.apiHost;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    application: ApplicationAdapter;
  }
}
