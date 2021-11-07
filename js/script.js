/**********Document Ready Functions**********/

jQuery(function($) {

    /**********Menu Button**********/

    $('#menu-btn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        $('nav').toggleClass('active');

        if ($('nav').hasClass('active')) {
            $(this).text('Close');
        } else {
            $(this).text('Menu');
        }
    })

});