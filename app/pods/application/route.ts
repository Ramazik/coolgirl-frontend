import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import FetchService from 'coolgirl-frontend/services/fetch';
import Intl from 'ember-intl/services/intl';

export default class ApplicationRoute extends Route {
  @service intl!: Intl;
  @service fetch!: FetchService;

  beforeModel(): void | Promise<unknown> {
    this.intl.setLocale('en-US');
  }

  model(): void {
    // Run in background without a rendering delay
    void this.fetch.fetchGamesTask.perform();
  }

  afterModel(): void {
    // Remove static spinner in index.html after app has booted
    if (typeof document !== 'undefined') {
      const loader = document.getElementById('app-loading');
      loader?.parentElement?.removeChild(loader);
    }
  }
}
