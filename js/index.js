$('document').ready(function(){
	$('.menu').click(function(){
		console.log('clicked');
		$('.navlinks').toggleClass('active');
	});
});