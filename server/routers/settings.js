const {Router} = require('express');

const settingsController = require('../controllers/settings');

const router = Router();

router.get('/', settingsController.get);
router.post('/', settingsController.put);

module.exports = router;
