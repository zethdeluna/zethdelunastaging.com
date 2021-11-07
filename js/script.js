/**********Document Ready Functions**********/

jQuery(function($) {

    /**********Menu Button**********/

    $('#menu-btn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        $('html').toggleClass('nav-open');

        if ($('nav').hasClass('active')) {
            $(this).text('Menu');

            setTimeout(function() {
                $('nav').removeClass('active');
            }, 500);

            $('.nav-container').removeClass('active');


        } else {
            $(this).text('Close');

            $('nav').addClass('active');

            setTimeout(function() {
                $('.nav-container').addClass('active');
            }, 250);
        }

        
    })

    /**********Marquees**********/

    $('.hero .marquee span').text('Front-end Developer &nbsp; &nbsp;'.repeat(24));

});