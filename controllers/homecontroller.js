//home controller

module.exports = {

	//function related to controller

	index : function(req, res, next){
		res.render('index', {title : 'Welcome to simple task manager'});
	}

}