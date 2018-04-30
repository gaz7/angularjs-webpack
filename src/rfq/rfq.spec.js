import rfq from './rfq';
import price from '../services/price.service';

describe('rfq', () => {
  let PriceServiceMock = {
    getPrice: symbol => ({
        "data": {
            "symbol": "UKT",
            "price": {
                "indicative": 90.76,
                "historical": [
                    {
                        "date": "2011-01-04",
                        "value": 3.98
                    }
                ]
            }
        },
        "actions": ["5", "10", "25", "n"]
    })
  };

  describe('RfqCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(rfq);

      angular.mock.inject(($controller) => {
        ctrl = $controller('RfqCtrl', {
          price: PriceServiceMock
        });
      });
    });

    it('should contain the symbol', () => {
      expect(ctrl.symbol).toBe('BACT');
    });

    it('should contain the indicative price', () => {
      expect(ctrl.indicative).toBe(90.76);
    });
  });
});