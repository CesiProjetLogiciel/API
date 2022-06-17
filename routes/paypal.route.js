const express = require('express');
const paypal = require('../services/paypal');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };

  options.createPaypalinfoInlineReqUrlencoded = req.body;

  try {
    const result = await paypal.createPaypalinfo(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:userId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "userId": req.params.userId,
  };


  try {
    const result = await paypal.readPaypalinfo(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/:userId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "userId": req.params.userId,
  };

  options.updatePaypalinfoInlineReqUrlencoded = req.body;

  try {
    const result = await paypal.updatePaypalinfo(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:userId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "userId": req.params.userId,
  };


  try {
    const result = await paypal.deletePaypalinfo(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;