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

    function build_marquee($section, $text) {
        /** $section should be selector as string
            $text should be a marquee text as string
        */

        const $whitespaces = '&nbsp;'.repeat(4);
        $text = $text+$whitespaces;
        let $marquee = $section+' .marquee span';

        $($marquee).html($text.repeat(24));

        let $height = $($marquee).width();
        let $startPosition = $(window).height() - $height;
        $($marquee).css('top', $startPosition);
    }

    build_marquee('.hero', 'Front-end Developer');

});