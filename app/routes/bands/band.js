import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BandsBandRoute extends Route {
  @service catalog;
  @service router;

  model(params) {
    return this.catalog.find('band', (band) => band.id === params.id);
  }

  redirect(band) {
    if (band.description) {
      this.router.transitionTo('bands.band.details');
    } else {
      this.router.transitionTo('bands.band.songs');
    }
  }
}
