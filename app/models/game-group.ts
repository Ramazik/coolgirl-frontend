import Model, { attr, hasMany, SyncHasMany } from '@ember-data/model';
import Game from './game';

export default class GameGroup extends Model {
  @attr('string') name!: string;

  @hasMany('game', { async: false })
  games!: SyncHasMany<Game>;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'game-group': GameGroup;
  }
}
