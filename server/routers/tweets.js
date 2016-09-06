const {Router} = require('express');

const tweetsController = require('../controllers/tweets');

const router = Router();

const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function(req, file, cb) {
            cb(null, Date.now() + '_' + file.originalname)
        }
    })
});

router.get('/', tweetsController.get);
router.get('/choose', tweetsController.choose);
router.get('/:id', tweetsController.getTweet);
router.post('/', upload.single('image'), tweetsController.post);

module.exports = router;
