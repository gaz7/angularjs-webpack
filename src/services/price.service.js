import angular from 'angular';
// data would usually come from API call, but just mock it for this exercise
import prices from '../../data/prices.json';

class Price {
  constructor() {
    this.prices = prices;
  }

  getPrice(symbol) {
    return this.prices.find(p => p.data.symbol === symbol);
  }
}

export default angular.module('services.price', [])
  .service('price', Price)
  .name;
