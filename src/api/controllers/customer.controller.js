const chargebee = require('chargebee');

chargebee.configure({
  site: 'differentdog-dev-test',
  api_key: 'test_1WoLulQA3lMVcuo34awKqcuqObzcd96nB7v',
});

exports.get = async (req, res, next) => {
  try {
    chargebee.customer.list({
    }).request((error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        for (let i = 0; i < result.list.length; i += 1) {
          const entry = result.list[i];
          console.log(entry);
        }
        res.send(result);
      }
    });
  } catch (error) {
    next(error);
  }
};
/*
exports.create = async (req, res, next) => {
  chargebee.customer.create({
    first_name: "John",
    last_name: "Doe",
    email: "john@test.com",
    locale: "fr-CA",
    billing_address: {
      first_name: "John",
      last_name: "Doe",
      line1: "PO Box 9999",
      city: "Walnut",
      state: "California",
      zip: "91789",
      country: "US"
    }
  }).request(function (error, result) {
    if (error) {
      //handle error
      console.log(error);
    } else {
      console.log(result);
      let customer = result.customer;
      let card = result.card;
      res.send({ customer: customer, card: card });
    }
  });
}
 */
