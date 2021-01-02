import Route from '@ember/routing/route';
import Game from 'coolgirl-frontend/models/game';
import GameGroup from 'coolgirl-frontend/models/game-group';
import RSVP from 'rsvp';
import ArrayProxy from '@ember/array/proxy';

export interface Games_Route_Args {
  games: ArrayProxy<Game>;
  gameGroups: ArrayProxy<GameGroup>;
}

export default class Games_Route extends Route {
  model(): Promise<Games_Route_Args> {
    return RSVP.hash({
      games: this.store.findAll('game'),
      gameGroups: this.store.findAll('game-group'),
    });
  }
}
