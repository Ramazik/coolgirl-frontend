import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import FetchService from 'coolgirl-frontend/services/fetch';
import GamesService from 'coolgirl-frontend/services/games';

enum ViewMode {
  Compact = 'compact',
  Thumbnails = 'thumbnails',
  Cards = 'cards',
}

export default class Games extends Controller {
  queryParams = [{ viewMode: 'view' }];

  @service fetch!: FetchService;
  @service games!: GamesService;

  viewModes = Object.values(ViewMode);
  @tracked viewMode: ViewMode = ViewMode.Thumbnails;

  @action
  setViewMode(viewMode: ViewMode): void {
    this.viewMode = viewMode;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    games: Controller;
  }
}
