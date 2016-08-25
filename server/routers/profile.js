const {Router} = require('express');

const profileController = require('../controllers/profile');

const router = Router();

router.get('/', profileController.get);
router.get('/:id', profileController.get);
router.post('/', profileController.post);

module.exports = router;
