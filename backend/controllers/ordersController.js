const orders = require('../data/orders.json');
const products = require('../data/products.json');

const getOrders = (req, res) => {
  res.json(orders);
};

const getPickingList = (req, res) => {
  const pickingList = {};

  orders.forEach(order => {
    order.lineItems.forEach(item => {
      const productDetails = products[item.productId];
      productDetails.forEach(product => {
        if (pickingList[product.name]) {
          pickingList[product.name] += product.quantity || 1;
        } else {
          pickingList[product.name] = product.quantity || 1;
        }
      });
    });
  });

  const formattedPickingList = Object.keys(pickingList).map(key => ({
    name: key,
    quantity: pickingList[key]
  }));

  res.json(formattedPickingList);
};

const getPackingList = (req, res) => {
  const packingList = orders.map(order => {
    return {
      orderId: order.orderId,
      orderDate: order.orderDate,
      customer: {
        name: order.customerName,
        address: order.shippingAddress
      },
      lineItems: order.lineItems.map(item => {
        return {
          itemName: item.productName,
          products: products[item.productId].map(product => ({
            name: product.name,
            quantity: product.quantity || 1
          }))
        };
      })
    };
  });

  res.json(packingList);
};

module.exports = {
  getOrders,
  getPickingList,
  getPackingList
};
