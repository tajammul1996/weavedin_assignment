$(function(){

	//ajax function for complete
	$('#tbl-task #btn-complete').click(function (e) {
		e.preventDefault();
		var complete = $(this);
		var id = complete.parent().parent().find('#taskID').text();

		var confirmation = confirm("Does this task completed ?");

		if(confirmation){
			$.ajax({
				url : 'http://localhost:3000/taskcompleted',
				method : 'post',
				data : {id:id},
				success : function(res){
					if(res.res){
						complete.parent().parent().remove();
					}
				}
			});
		}
		
	});

});

