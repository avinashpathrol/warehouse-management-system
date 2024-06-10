const { getPickingList, getPackingList } = require('./ordersController');
const orders = require('../data/orders.json');
const products = require('../data/products.json');

test('getPickingList should return the correct picking list', () => {
  const req = {};
  const res = {
    json: jest.fn()
  };

  getPickingList(req, res);

  const expectedPickingList = {
    'Red Roses Bouquet': 1,
    'Box of chocolates': 1,
    'Love card': 1,
    'Women’s perfume': 1,
    'Birthday cupcake': 1,
    '$100 Visa Gift Card': 1,
    'Birthday card': 1
  };

  expect(res.json).toHaveBeenCalledWith(expectedPickingList);
});

test('getPackingList should return the correct packing list', () => {
  const req = {};
  const res = {
    json: jest.fn()
  };

  getPackingList(req, res);

  const expectedPackingList = [
    {
      orderId: 1,
      orderDate: '2023-09-15',
      customer: {
        name: 'John Smith',
        address: '100 Dundas Street East'
      },
      lineItems: [
        {
          itemName: 'Valentines Box',
          products: [
            { name: 'Red Roses Bouquet' },
            { name: 'Box of chocolates' },
            { name: 'Love card' },
            { name: 'Women’s perfume' }
          ]
        },
        {
          itemName: 'Birthday Box',
          products: [
            { name: 'Birthday cupcake' },
            { name: '$100 Visa Gift Card' },
            { name: 'Birthday card' }
          ]
        }
      ]
    }
  ];

  expect(res.json).toHaveBeenCalledWith(expectedPackingList);
});
