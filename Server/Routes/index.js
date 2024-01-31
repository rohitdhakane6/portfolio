const router = require('express').Router();

const portfolio = require('../controller/portfolio');
const project = require('../controller/project');
const contact = require('../controller/contact');
const user = require('../controller/Auth');
const intro = require("../controller/intro");
const about = require("../controller/about");
const verifyToken = require('../middleware/Auth');

router.use("/",portfolio);
router.use("/project",verifyToken,project);
router.use("/Admin",user);
router.use("/contact",verifyToken,contact);
router.use("/about",verifyToken,about);
router.use("/intro",verifyToken,intro);

module.exports = router