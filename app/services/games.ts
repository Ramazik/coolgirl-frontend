import Service, { inject as service } from '@ember/service';
import { cached, tracked } from '@glimmer/tracking';
import { GameObj } from 'coolgirl-frontend/types';
import FetchService from 'coolgirl-frontend/services/fetch';
import { action } from '@ember/object';

export class GameWrapper {
  game: GameObj;
  gamesWrapper?: GamesWrapper; // eslint-disable-line no-use-before-define

  @tracked isSelected: boolean;

  get name(): string {
    return this.game.name;
  }

  constructor(game: GameObj) {
    this.game = game;
    this.isSelected = game.is_default;
  }

  @action toggle(): void {
    this.isSelected = !this.isSelected;
  }

  @action setCurrent(): void {
    this.gamesWrapper?.setCurrent(this);
  }
}

export class GamesWrapper {
  gameWrappers: GameWrapper[];
  @tracked gameWrapperCurrent?: GameWrapper;

  constructor(gameWrappers: GameWrapper[]) {
    this.gameWrappers = gameWrappers;
    this.gameWrapperCurrent = gameWrappers[0];

    gameWrappers.forEach((gameWrapper) => {
      gameWrapper.gamesWrapper = this;
    });
  }

  get name(): string | undefined {
    return this.gameWrappers[0]?.name;
  }

  @action setCurrent(gameWrapper: GameWrapper): void {
    if (this.gameWrapperCurrent !== gameWrapper) {
      this.gameWrapperCurrent = gameWrapper;
    }
  }
}

export default class GamesService extends Service {
  @service fetch!: FetchService;

  get games(): GameObj[] {
    return this.fetch.games.toArray().sortBy('name');
  }

  get gameWrappers(): GameWrapper[] {
    return this.games.map((game) => {
      return new GameWrapper(game);
    });
  }

  @cached
  get gameWrappersByName(): Record<string, GameWrapper[]> {
    return this.gameWrappers.reduce((result, gameWrapper) => {
      if (!result[gameWrapper.name]) {
        result[gameWrapper.name] = [];
      }

      result[gameWrapper.name].push(gameWrapper);

      return result;
    }, {} as Record<string, GameWrapper[]>);
  }

  @cached
  get gameWrapperGroups(): GameWrapper[][] {
    return Object.keys(this.gameWrappersByName)
      .sort()
      .map((gameName) => {
        return this.gameWrappersByName[gameName];
      });
  }

  @cached
  get gamesWrappers(): GamesWrapper[] {
    return this.gameWrapperGroups.map((gameWrappers) => {
      return new GamesWrapper(gameWrappers);
    });
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    games: GamesService;
  }
}
