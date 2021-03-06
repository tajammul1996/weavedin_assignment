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
router.post('/taskcompleted', controllers.taskscontroller.taskcomplete);
router.get('/taskmodify/:id', controllers.taskscontroller.modifytask);
router.post('/edit', controllers.taskscontroller.postModification);


module.exports = router;