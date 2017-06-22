$(function(){
	$('.form-newtask form').form({
		Category : {
			identifier : 'Category',
			rules : [
				{
					type: 'empty',
					prompt: 'Category is mandatory for your task!'
				}
			]
		},

		Task : {
			identifier : 'Task',
			rules : [
				{
					type: 'empty',
					prompt: 'You cannot leave Task field as empty' 
				}

			]
		}
	});
});