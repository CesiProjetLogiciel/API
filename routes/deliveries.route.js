const express = require('express');
const deliveries = require('../services/deliveries');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };


  try {
    const result = await deliveries.deliverylist(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:orderId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "orderId": req.params.orderId,
  };


  try {
    const result = await deliveries.readdelivery(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;