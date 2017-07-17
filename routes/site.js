var express = require('express');
var router = express.Router();

// landing page
router.get('/', (req, res) => {
		res.send('index');
	}
);

module.exports = router;