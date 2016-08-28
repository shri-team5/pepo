const {Router} = require('express');

const searchController = require('../controllers/search');

const router = Router();

router.get('/', searchController.get);

module.exports = router;
