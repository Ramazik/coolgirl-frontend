import EmberRouter from '@ember/routing/router';
import config from 'coolgirl-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// eslint-disable-next-line array-callback-return
Router.map(function () {
  this.route('games');

  this.route('not-found', {
    path: '/*wildcard',
  });
});
