$(document).ready(function() {

	$("#moremenu").hide();
	$("#more").css('cursor', 'pointer');
	$("#more").click(function(){
		$("#moremenu").toggle(300);
	});

	$("p").hide();
	$(".see_more").css('cursor','pointer');
	$(".see_more").hover(function(){
		$("p").toggle(300);
	});
/*
	$('#clickme').click(function(){
		$("#float_img>img").animate({"left": "200", "height": "900", "width": "900", "top": "-650"});
	});

	$('#img1').click(function(){
		$("#img1").animate({"left": "200", "height": "900", "width": "900", "top": "-650"});
	});

	$("#img2").click(function(){
		$("#img2").animate({"left": "200", "height": "900", "width": "900", "top": "-650"});
	});

	$("#img3").click(function(){
		$("img").animate({"left": "200", "height": "900", "width": "900", "top": "-650"});
	});
*/
	$("img").css('cursor', 'pointer');
	$("img").click(function(){
		$(this).animate({"height":"400", "width":"auto"});
	});  /* Can replace the three lines above with this code!!*/

	$("img").click(function(){
		if($(this).height()<399){
			$(this).animate({"height":"400", "width":"auto"});
		}
		else{
			$(this).animate({"height":"200", "width":"auto"});
		}
	});


});
