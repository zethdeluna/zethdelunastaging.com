/**********Document Ready Functions**********/

jQuery(function($) {

    /**********Menu Button**********/

    $('#menu-btn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        if ($('nav').hasClass('active')) {
            $('nav').removeClass('active');
            $(this).text('Close');
        } else {
            $('nav').addClass('active');
            $(this).text('Menu');
        }

        
    })

});