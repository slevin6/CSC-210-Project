$(document).ready(function () {
	textHover();
	textClick();
	buttonHover();
});

var textHover = function () {
	$("#usernameText, #passwordText").hover(function () {
			$(this)[0].style.border = "2px solid #344740"
  		}, function() {
    		$(this)[0].style.border = "2px solid #78a795"
  	});
}

var textClick = function () {
	$("#usernameText, #passwordText").click(function () {
		if($(this)[0].id === "usernameText") {
			console.log($(this)[0].id);
			$(this)[0].placeholder = "";
			$(this)[0].style.outline = "0px !important";
			$(this)[0].style.webkitAppearance = "none";
			$("#passwordText")[0].placeholder = " Password";
		} else if($(this)[0].id === "passwordText") {
			$(this)[0].placeholder = "";
			$(this)[0].style.outline = "0px !important";
			$(this)[0].style.webkitAppearance = "none";
			$("#usernameText")[0].placeholder = " Username";
		}
  	});
}

var buttonHover = function () {
	$("#submitButton").hover(function () {
			$(this)[0].style.backgroundColor = "#597c6f";
			$(this)[0].style.color = "5b4937"
  		}, function() {
    		$(this)[0].style.backgroundColor = "#5b4937";
    		$(this)[0].style.color = "white"
	});
}