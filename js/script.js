/**********Document Ready Functions**********/

jQuery(function($) {

    /**********Fade Effects**********/

    setTimeout(function() {
        $('.hero').addClass('active');
    }, 500);

    let set1000 = ['.arrow-down', '.left-links'];
    set1000.forEach(e => {
      setTimeout(function() {
        $(e).addClass('active');
      }, 1000);
    });

    // Fade In/Out

    $(window).on('load', function() {
        $(window).scroll(function() {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $('.fade-in-out').each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
              if ($(this).css('opacity')==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
              if ($(this).css('opacity')==1) {$(this).fadeTo(500,0);}
            }
          });
        }).scroll(); //invoke scroll-handler on page-load
      });

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
            }, 750);

            $('.nav-container').removeClass('active');


        } else {
            $(this).text('Close');

            $('nav').addClass('active');

            setTimeout(function() {
                $('.nav-container').addClass('active');
            }, 500);
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

        $($marquee).html($text.repeat(50));

        let $height = $($marquee).width();
        let $startPosition = $(window).height() - $height;
        $($marquee).css('top', $startPosition);
    }

    build_marquee('.hero', 'Front-end Developer');
    build_marquee('.about-me', 'About Me');

});