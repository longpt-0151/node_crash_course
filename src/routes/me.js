const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/courses/stored', meController.show);
router.get('/courses/trash', meController.trash);

module.exports = router;
