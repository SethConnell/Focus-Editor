$(document).ready(function(){
    var target = $('.writingarea')[0]; // Get DOM element from jQuery collection
	$('#focus').click(function() {
		if (screenfull.enabled) {
			screenfull.request(target);
		}
	});
});
