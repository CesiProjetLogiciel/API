const express = require('express');
const oauth = require('../services/oauth');
const router = new express.Router();
 
router.post('/token', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };

  options.tokenInlineReqUrlencoded = req.body;

  try {
    const result = await oauth.token(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;