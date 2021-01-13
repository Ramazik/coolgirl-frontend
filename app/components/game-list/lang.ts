import Component from '@glimmer/component';
import { LangGame } from 'coolgirl-frontend/types';

interface Args {
  lang: keyof typeof LangGame;
}

export default class GameList_Lang extends Component<Args> {
  get value(): LangGame {
    return LangGame[this.args.lang];
  }
}
