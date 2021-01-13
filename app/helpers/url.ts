import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import FetchService from 'coolgirl-frontend/services/fetch';

export default class TranslateError extends Helper {
  @service fetch!: FetchService;

  compute([resource]: [string]): string {
    return `${this.fetch.baseURL}/${resource}`;
  }
}
