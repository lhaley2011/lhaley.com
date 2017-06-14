$(document).ready(function(){
	scrollButtonDisplayGT('#resumeWrapper', '.scrollToTop');	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		scrollToTop('#resumeWrapper');
		return false;
	});
});

var scrollButtonDisplayGT = function(container, button, displayHeight) {
	displayHeight = displayHeight || 50;
	if($(container).scrollTop() > displayHeight) {
                $(button).fadeIn();
        }
        //Check to see if the window is top if not then display button
        $(container).scroll(function(){
                if ($(this).scrollTop() > displayHeight) {
                        $(button).fadeIn();
                } else {
                        $(button).fadeOut();
                }
        });
}
var scrollButtonDisplayLT = function(container, button, displayHeight) {
        displayHeight = displayHeight || 50;
        if($(container).scrollTop() < displayHeight) {
                $(button).fadeIn();
        }
        //Check to see if the window is top if not then display button
        $(container).scroll(function(){
                if ($(this).scrollTop() < displayHeight) {
                        $(button).fadeIn();
                } else {
                        $(button).fadeOut();
                }
        });
}

var scrollToTop = function(container) {
	$(container).animate({scrollTop: 0 }, 800);
}
var scrollToBottom = function(container) {
        $(container).animate({scrollTop: $(container).height() }, 800);
}
var scrollToSection = function(container, section) {
	$(container).animate({scrollTop: $(section).offset().top }, 800);
}
