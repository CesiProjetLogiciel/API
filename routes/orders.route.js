const express = require('express');
const orders = require('../services/orders');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };


  try {
    const result = await orders.orderlist(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };

  options.createorderInlineReqUrlencoded = req.body;

  try {
    const result = await orders.createorder(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:id', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "id": req.params.id,
  };


  try {
    const result = await orders.readorder(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/:id', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "id": req.params.id,
  };

  options.updateorderInlineReqUrlencoded = req.body;

  try {
    const result = await orders.updateorder(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/:id/payment', async (req, res, next) => {
  let options = { 
    "id": req.params.id,
  };


  try {
    const result = await orders.validatepayment(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;