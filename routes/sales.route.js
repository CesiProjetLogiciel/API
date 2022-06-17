const express = require('express');
const sales = require('../services/sales');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };


  try {
    const result = await sales.salesstatistics(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;