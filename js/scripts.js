$(document).ready(function(){
    var target = $('.writingarea')[0]; // Get DOM element from jQuery collection
	$('#focus').click(function() {
		if (screenfull.enabled) {
			screenfull.request(target);
		}
	});
	$("#save").click(function() {
		var element = document.createElement('a');
		var text = $("#writing").val();
		var defaultfilename = "Writing.txt";
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		var title = $("#docname").val();
		if (title != "") {
			element.setAttribute('download', title);
		}
		else {
			element.setAttribute('download', defaultfilename)
		}
	    element.style.display = 'none';
	    document.body.appendChild(element);
	    element.click();
	    document.body.removeChild(element);
		  // Start file download.
		download("hello.txt","This is the content of my file :)");
	});
});