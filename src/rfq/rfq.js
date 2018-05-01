import angular from 'angular';
import moment from 'moment';
import price from '../services/price.service';
import '../style/index.scss';

let rfq = () => {
  return {
    template: require('./rfq.html'),
    controller: 'RfqCtrl',
    controllerAs: 'rfq'
  }
};

class RfqCtrl {
  constructor(price) {
    this.priceService = price;
    this.symbol = 'BACT'; // hard-code symbol for now. In practice, there would be some way to change this
    const data = this.priceService.getPrice(this.symbol);
    this.actions = data.actions;
    this.indicative = data.data.price.indicative;
    const historicalPrice = data.data.price.historical[0]; // only one value in array, so just use it for now
    this.historicalVal = historicalPrice.value;
    this.historicalDate = moment(historicalPrice.date, 'YYYY-MM-DD').format('MMM YYYY');
  }

  changeRange(val) {
    // For now, just log out the button clicked. In practice, this might trigger an API call
    console.log('clicked', val);
  }
}

const MODULE_NAME = 'rfq';

angular.module(MODULE_NAME, [price])
  .directive('rfq', rfq)
  .controller('RfqCtrl', RfqCtrl);

export default MODULE_NAME;