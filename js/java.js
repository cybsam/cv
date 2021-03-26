$(document).ready(function(){
	$("register-form").hide();
	$('.message a').click(function(){
	$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	alert("Made By: SHUVO HALDER");
	});
})