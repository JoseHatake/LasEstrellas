$(document).ready(main);
function main () {
	$('.icon-up').css("display","none");
	/* Codigo para la expancioón y compresión del submenú */
	var menuMovil = 0;
	$('#products').mouseover(function () {
		$('#subProducts').css("display","block");
		$('.icon-down').css("display","none");
		$('.icon-up').css("display","");
		menuMovil = 1;
	});
	$('#products').mouseout(function () {
		$('#subProducts').css("display","none");
		$('.icon-down').css("display","");
		$('.icon-up').css("display","none");
		menuMovil = 0;
	});

	$('#subProducts').mouseover(function () {
		$('#subProducts').css("display","block");
		$('.icon-down').css("display","none");
		$('.icon-up').css("display","");
		menuMovil = 1;
	});
	$('#subProducts').mouseout(function () {
		$('#subProducts').css("display","none");
		$('.icon-down').css("display","");
		$('.icon-up').css("display","none");
		menuMovil = 0;
	});

	$('#products').click(function () {
		if (menuMovil == 0) {
			$('#subProducts').css("display","block");
			$('.icon-down').css("display","none");
			$('.icon-up').css("display","");
			menuMovil = 1;
		}
		else{
			$('#subProducts').css("display","none");
			$('.icon-down').css("display","");
			$('.icon-up').css("display","none");
			menuMovil = 0;
		}
	});
	/* Codigo para la expancioón y compresión del submenú */

	/* Codigo para el menu en disporitivos moviles */
	var cont = 1;
	$('.menu-bar').click(function () {
		//$('nav').toggle();
		if (cont == 1) {
			$('nav').animate({
				left: '0'
			});
			cont = 0;
		}
		else{
			cont = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
	if($(window).width() <= 800){
		$('container').click(function () {
			cont = 1;
			$('nav').animate({
					left: '-100%'
				});
		});
		$('.slider').click(function () {
			cont = 1;
			$('nav').animate({
					left: '-100%'
				});
		});
		$('footer').click(function () {
			cont = 1;
			$('nav').animate({
					left: '-100%'
				});
		});
	}
	/* Codigo para el menu en disporitivos moviles */
};