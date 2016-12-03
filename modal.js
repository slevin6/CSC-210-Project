// Get the modal
var modal = document.getElementById('myModal');
var editModal = document.getElementById('editModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var subm = document.getElementsByClassName("submit")[0];
var deleteButton = document.getElementsByClassName('deleteButton')[0];

$(window).click(function(e) {
    // console.log(e); // then e.srcElement.className has the class
    var name = $(e.target).closest(".dataInner").children("p").html()
    console.log("Name: " + name);
    if(name!=undefined) { // If they clicked on an assignment or class
    	//alert(name) // is the class/assignment name
    	var regex = /^.*(?=(time))/;
    	var nameTemp = regex.exec(name);
		if(nameTemp != undefined && nameTemp[0] == "Class ") {
			console.log("WORKING?");
	    	$.ajax({
	    		url: "cgi-bin/getModalDataClass.py",
	    		type: "post",
	    		datatype: "html",
	    		data: {"name":name},
	    		success: function(response){
					$("#getModalData").html(response); // Update the popup content based on response
					editModal.style.display = "block"; // Open popup
					deleteButton = document.getElementsByClassName('deleteButton')[0]; // Update delete button
				}	
			});

			name = $(e.target).closest(".deleteBox").children("h3").html() // update name (neccessary for some reason)
			if(e.target.className=="deleteButton") { // Listens for delete assignment button being hit
	
			$.ajax({
				url: "cgi-bin/deleteClass.py",
				type: "post",
				datatype: "html",
				data: {"name":name},
				success: function(response){
					alert(name)
					editModal.style.display = "none"; // Close popup
				}})}

    	} else {
    		$.ajax({
	    		url: "cgi-bin/getModalDataAssignment.py",
	    		type: "post",
	    		datatype: "html",
	    		data: {"name":name},
	    		success: function(response){
					$("#getModalData").html(response); // Update the popup content based on response
					editModal.style.display = "block"; // Open popup
					deleteButton = document.getElementsByClassName('deleteButton')[0]; // Update delete button
				}	
			});

			name = $(e.target).closest(".deleteBox").children("h3").html() // update name (neccessary for some reason)
	if(e.target.className=="deleteButton") { // Listens for delete assignment button being hit
	
	$.ajax({
		url: "cgi-bin/deleteAssignment.py",
		type: "post",
		datatype: "html",
		data: {"name":name},
		success: function(response){
			//alert(name)
			editModal.style.display = "none"; // Close popup
		}})}

    	}	
    }
});

/*
$(deleteButton).click(function (e) {       
	    alert('hello');
	    var h1 = $(e.target).closest(".dataInner").children("h1").html();
	    //alert(h1);
	});*/

$(function getModalData() {
	$.ajax({
		url: "cgi-bin/getModalData.py",
		type: "get",
		datatype: "html",

		success: function(response){
			$("#getModalData").html(response);
		},
		complete: function() {
		}
	});
});

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

subm.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the edit modal's Close is hit
span2.onclick = function() {
	editModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}