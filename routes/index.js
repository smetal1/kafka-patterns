var express = require('express');
var PRODUCER_CONTROLLER=require('../controller/kakfa-producer-controller')
var CONSUMER_CONTROLLER=require('../controller/kafka-consumer-controller')
var router = express.Router();

/* GET home page. */
router.post('/', PRODUCER_CONTROLLER) 
router.post('/consumer',CONSUMER_CONTROLLER)

module.exports = router;
