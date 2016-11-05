$(document).ready(function () {
	navButtonHover();
});

var navButtonHover = function () {
	$(".nav-button").hover(function () {
			$(this)[0].style.borderBottom = "2px solid #78a795";
			$(this)[0].style.color = "#78a795";
		}, function() {
			$(this)[0].style.borderBottom = "none";
			$(this)[0].style.color = "black";
	})
}