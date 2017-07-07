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
		var filename = "Writing.txt";
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	    element.setAttribute('download', filename);
	    element.style.display = 'none';
	    document.body.appendChild(element);
	    element.click();
	    document.body.removeChild(element);
		  // Start file download.
		var name = $("#docname").val();
			if (name != "") {
				download(name + ".txt","This is the content of my file :)");	
			}
			else {
				download("FocusedWritingFile.txt","This is the content of my file :)")
			}
	});
});