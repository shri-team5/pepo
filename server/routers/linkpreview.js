const {Router} = require('express');

const linkPreviewController = require('../controllers/linkpreview');

const router = Router();

router.get('/', linkPreviewController.get);

module.exports = router;
