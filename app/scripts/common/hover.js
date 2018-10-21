$('a').hover(function(){
	var link = $(this)[0].getBoundingClientRect();

	var x_pos = link.width/2 + link.left;
	var y_pos = link.top + link.height/2;
	
	var translate = 'translate(' + x_pos + 'px,' + y_pos + 'px)';
	var scale = 'scale(' + link.width + ', ' + link.height + ')';
	
	console.log(translate + ' ' + scale);

	$('.underline').css({
		'transform' : translate + ' ' + scale
	});	
});
