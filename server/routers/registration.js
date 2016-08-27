const {Router} = require('express');

const registrationController = require('../controllers/registration');

const router = Router();

router.get('/', registrationController.get);
router.post('/', registrationController.post);

module.exports = router;
