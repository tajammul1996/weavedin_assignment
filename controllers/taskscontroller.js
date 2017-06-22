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

	}
}