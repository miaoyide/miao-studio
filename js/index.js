$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    $('a').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    });
    function newpage() {
        window.location = newLocation;
    }
});


$(function(){
    var windowH = $(window).height();
    var windowW = $(window).width()
    var boxH = $('.box').height();
    if(windowH > boxH) {                            
        $('.box').css({'height':($(window).height())});
    }                                                                               
    if(windowW < 992 ){
    	$('.box').css({'height': (windowH/4) });
        $('.logo a').css({ 'color': 'white' });
    }
    if(windowW > windowH ){
    	$('.box').css({
    		'height':($(window).height()),
    		'float':'left',
    		'width':'25%'
    	});
    	$('.logo').css({
		    'top': 'auto',
		    'bottom': '5%',
		    'left': '87.5%',
		    'margin-top': '0',
		    'background-color': 'transparent',
		    'color': 'black'
    	});
        $('.logo a').css({ 'color': 'black' });
    }   
});

// for the window resize
$(window).resize(function() {
    var windowH = $(window).height();
    var windowW = $(window).width()
    $(".box").height(windowH);

	if(windowW > windowH ){
    	$('.box').css({
    		'height':($(window).height()),
    		'float':'left',
    		'width':'25%'
    	});
    	$('.logo').css({
		    'top': 'auto',
		    'bottom': '5%',
		    'left': '87.5%',
		    'margin-top': '0',
		    'background-color': 'transparent',
		    'color': 'black'
    	});
        $('.logo a').css({ 'color': 'black' });
    }
    else{
    	$('.box').css({
    		'height': (windowH/4),
    		'float':'none',
    		'width':'100%'
    	});
    	$('.logo').css({
		    'top': '50%',
		    'left': '50%',
		    'bottom': 'auto',
		    'margin-left': '-75px',
		    'margin-top': '-75px',
		    'background-color': 'rgba(79, 167, 125, 0.5)',
		    'color': 'white'
    	});
        $('.logo a').css({ 'color': 'white' });
    }
});