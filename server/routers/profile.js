const {Router} = require('express');

const profileController = require('../controllers/profile');

const router = Router();

router.get('/', profileController.get);
router.get('/username/:username', profileController.getByUsername);
router.get('/:id', profileController.get);
router.post('/subscribe/:user_id', profileController.subscribe);
router.post('/unsubscribe/:user_id', profileController.unsubscribe);

module.exports = router;
