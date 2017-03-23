$(document).ready(function(){
	var aa = $("li");
	aa.each(function(index){
		var cc = $(this).text();
		var dd = cc.substring(0,4);
		var ff = cc.substring(5);
		$(this).html("<strong>"+dd+"</strong> "+ff);		
	});
});