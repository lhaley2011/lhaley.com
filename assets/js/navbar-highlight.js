$(function(){
    var navLinks = $('a', $('#navbar'));
    navLinks.each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active-page'); 
            $(this).parents('li').addClass('active-page');
            $(this).css('color','#fff');
            $(this).css('background-color', 'transparent');
            $(this).css('cursor', 'default');
        }
    });

    
});

