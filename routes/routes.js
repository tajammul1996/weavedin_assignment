 var express = require('express');
var router = express.Router();

//importing all the files from controller folder which can be utilized later
var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

/*Routes for task*/
router.get('/task', controllers.taskscontroller.task);
router.get('/new', controllers.taskscontroller.newTask);
router.post('/add', controllers.taskscontroller.postTask);
module.exports = router;
