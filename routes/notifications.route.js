const express = require('express');
const notifications = require('../services/notifications');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };


  try {
    const result = await notifications.notificationlist(options);
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

  options.createnotificationInlineReqUrlencoded = req.body;

  try {
    const result = await notifications.createnotification(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:id', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "id": req.params.id,
  };


  try {
    const result = await notifications.deletenotification(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;