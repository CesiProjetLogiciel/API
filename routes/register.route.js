const express = require('express');
const register = require('../services/register');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };

  options.registerInlineReqUrlencoded = req.body;

  try {
    const result = await register.register(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;