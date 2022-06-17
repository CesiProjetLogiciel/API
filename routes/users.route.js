const express = require('express');
const users = require('../services/users');
const router = new express.Router();
 
router.get('/:userId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "userId": req.params.userId,
  };


  try {
    const result = await users.readuser(options);
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

  options.updateuserInlineReqUrlencoded = req.body;

  try {
    const result = await users.updateuser(options);
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
    const result = await users.deleteuser(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:userId/addresses', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "userId": req.params.userId,
  };


  try {
    const result = await users.readaddress(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/:userId/addresses', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "userId": req.params.userId,
  };

  options.createaddressInlineReqUrlencoded = req.body;

  try {
    const result = await users.createaddress(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/:userId/addresses/:addressId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "addressId": req.params.addressId,
    "userId": req.params.userId,
  };

  options.updateaddressInlineReqUrlencoded = req.body;

  try {
    const result = await users.updateaddress(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:userId/addresses/:addressId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "addressId": req.params.addressId,
    "userId": req.params.userId,
  };


  try {
    const result = await users.deleteaddress(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:userId/billings', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "userId": req.params.userId,
  };


  try {
    const result = await users.readbillingaddress(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/:userId/billings', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "userId": req.params.userId,
  };

  options.createbillingaddressInlineReqUrlencoded = req.body;

  try {
    const result = await users.createbillingaddress(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/:userId/billings/:billingId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "billingId": req.params.billingId,
    "userId": req.params.userId,
  };

  options.updatebillingaddressInlineReqUrlencoded = req.body;

  try {
    const result = await users.updatebillingaddress(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:userId/billings/:billingId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "billingId": req.params.billingId,
    "userId": req.params.userId,
  };


  try {
    const result = await users.deletebillingaddress(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;