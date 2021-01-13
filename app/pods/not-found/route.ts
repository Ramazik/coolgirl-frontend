import Route from '@ember/routing/route';
import NotFoundError from 'coolgirl-frontend/utils/errors/not-found';

export default class NotFoundRoute extends Route {
  beforeModel(): never {
    throw new NotFoundError();
  }
}
