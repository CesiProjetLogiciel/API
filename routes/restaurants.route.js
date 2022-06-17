const express = require('express');
const restaurants = require('../services/restaurants');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
  };


  try {
    const result = await restaurants.restaurantlist(options);
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

  options.createrestaurantInlineReqUrlencoded = req.body;

  try {
    const result = await restaurants.createrestaurant(options);
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
    const result = await restaurants.readrestaurant(options);
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

  options.editrestaurantInlineReqUrlencoded = req.body;

  try {
    const result = await restaurants.editrestaurant(options);
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
    const result = await restaurants.deleterestaurant(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:restaurantId/menus', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "restaurantId": req.params.restaurantId,
  };


  try {
    const result = await restaurants.menulist(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/:restaurantId/menus', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "restaurantId": req.params.restaurantId,
  };

  options.createmenuInlineReqUrlencoded = req.body;

  try {
    const result = await restaurants.createmenu(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:restaurantId/menus/:menuId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "menuId": req.params.menuId,
    "restaurantId": req.params.restaurantId,
  };


  try {
    const result = await restaurants.readmenu(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/:restaurantId/menus/:menuId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "menuId": req.params.menuId,
    "restaurantId": req.params.restaurantId,
  };

  options.updatemenuInlineReqUrlencoded = req.body;

  try {
    const result = await restaurants.updatemenu(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:restaurantId/menus/:menuId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "menuId": req.params.menuId,
    "restaurantId": req.params.restaurantId,
  };


  try {
    const result = await restaurants.deletemenu(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/:restaurantId/menus/:menuId/products', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "menuId": req.params.menuId,
    "restaurantId": req.params.restaurantId,
  };

  options.addproducttomenuInlineReqUrlencoded = req.body;

  try {
    const result = await restaurants.addproducttomenu(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:restaurantId/menus/:menuId/products/:productId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "menuId": req.params.menuId,
    "productId": req.params.productId,
    "restaurantId": req.params.restaurantId,
  };


  try {
    const result = await restaurants.removeproductfrommenu(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:restaurantId/products', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "restaurantId": req.params.restaurantId,
  };


  try {
    const result = await restaurants.productlist(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/:restaurantId/products', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "restaurantId": req.params.restaurantId,
  };

  options.createproductInlineReqUrlencoded = req.body;

  try {
    const result = await restaurants.createproduct(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:restaurantId/products/:productId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "productId": req.params.productId,
    "restaurantId": req.params.restaurantId,
  };


  try {
    const result = await restaurants.readproduct(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/:restaurantId/products/:productId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "productId": req.params.productId,
    "restaurantId": req.params.restaurantId,
  };

  options.editproductInlineReqUrlencoded = req.body;

  try {
    const result = await restaurants.editproduct(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:restaurantId/products/:productId', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "productId": req.params.productId,
    "restaurantId": req.params.restaurantId,
  };


  try {
    const result = await restaurants.deleteproduct(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:restaurantId/stats', async (req, res, next) => {
  let options = { 
    "accept": req.header("accept"),
    "restaurantId": req.params.restaurantId,
  };


  try {
    const result = await restaurants.restaurantstatistics(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;