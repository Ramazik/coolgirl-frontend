import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import GamesService from 'coolgirl-frontend/services/games';

interface Args {
  isVirtualScrollingEnabled?: boolean;
}

export default class GameList_Compact_Component extends Component<Args> {
  @service games!: GamesService;
}
