const {Router} = require('express');

const tweetsController = require('../controllers/tweets');

const router = Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ dest: 'uploads/', storage: storage });

router.get('/', tweetsController.get);
router.get('/:id', tweetsController.getTweet);
router.post('/', upload.single('image'), tweetsController.post);

module.exports = router;
