import Model, { attr, belongsTo } from '@ember-data/model';
import { TranslationAttr } from 'coolgirl-frontend/types';
import GameGroup from 'coolgirl-frontend/models/game-group';

export default class Game extends Model {
  @attr('string') aka!: string | null;
  @attr('boolean') battery!: boolean;
  @attr() description!: TranslationAttr | null;
  @attr('string') gif!: string;
  @attr('boolean') isDefault!: boolean;
  @attr('string') language!: string;
  @attr('string') mapper!: string;
  @attr('string') mp4!: string;
  @attr('string') name!: string;
  @attr('string') screenshot!: string;
  @attr('number') size!: number;
  @attr('string') tag!: string | null;
  @attr('string') webm!: string;

  @belongsTo('game-group', { async: false })
  gameGroups!: GameGroup;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    game: Game;
  }
}
