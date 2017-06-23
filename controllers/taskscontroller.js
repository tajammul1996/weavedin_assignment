var mysql = require('mysql');

//task controller
module.exports = {
	//function related to controller
	task : function(req, res, next){
		var config = require('.././database/config');

		/* Establishing connection with mysql db using the 
			information written in config.js which is 
			located within ./database/ folder
		*/

		var db = mysql.createConnection(config);
		db.connect(function(error){
			if(!!error){
				console.log('Error');
			}else{
				console.log('connected');
			}
		});

		var task = null;

		db.query('SELECT * FROM tasks', function(err, rows, fields){

			if(!!err){
				console.log("error in query");
			}else{
				console.log("connection successful");
				console.log(rows);
			}

			task = rows;
			console.log(task[0].Task);
			db.end();

			res.render('task/task', {task: task});

		}); 

	},

	//function to create a new task or event
	newTask : function(req, res, next){
		res.render('task/new');
	},

	postTask : function(req, res, next) {
		var task = {
			Category : req.body.Category,
			Task : req.body.Task
		}
		var config = require('.././database/config');

		/* Establishing connection with mysql db to 
			add data within table */
		var db = mysql.createConnection(config);
		db.connect(function(error){
			if(!!error){
				console.log('Error');
			}else{
				console.log('connected');
			}
		});
		db.query('INSERT INTO tasks SET ?', task, function(err, rows, fields){
			if(err) throw err;

			db.end();
		});
		res.render('task/new', {info: 'Task added successfully!!'});
	},

	//this function is used to delete the task once it is completed!
	taskcomplete : function(req, res, next){
		var id = req.body.id;
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect(function(error){
			if(!!error){
				console.log('Error');
			}else{
				console.log('connected');
			}
		});

		var response = {res: false};
		db.query('DELETE FROM tasks WHERE ID = ?', id, function(err, rows, fields){
			if(err)throw err;

			db.end();
			response.res = true;
			res.json(response);
		});
	}
}