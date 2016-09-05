const {Router} = require('express');

const settingsController = require('../controllers/settings');

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


router.get('/', settingsController.get);
router.post('/', upload.single('avatar'), settingsController.put);

module.exports = router;
