import { Server } from 'ember-cli-mirage';

export default function (server: Server): void {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.loadFixtures();
}
