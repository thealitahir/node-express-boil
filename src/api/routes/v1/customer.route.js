const express = require('express');

const router = express.Router();

const controller = require('../../controllers/customer.controller');

router
  .route('/').get(controller.get);
router.route('/create').get(controller.create);

module.exports = router;
