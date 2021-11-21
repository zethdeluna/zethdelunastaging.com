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

        if ($('nav').hasClass('active')) {
            $(this).text('Menu');

            $('.nav-container').removeClass('active');

            setTimeout(function() {
              $('html').removeClass('nav-open');
              $('nav').removeClass('active');
            }, 750);

        } else {
            $(this).text('Close');

            $('html').addClass('nav-open');
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

        $($marquee).html($text.repeat(80));

        let $height = $(window).height() * 10;
        let $startPosition = ( $(window).height() * 2 ) - $height;
        $($marquee).css('top', $startPosition);
    }

    build_marquee('.hero', 'Front-end Developer');
    build_marquee('.about-me', 'About Me');
    build_marquee('.projects', 'Projects')

    /**********Skills & Education Marquees**********/

    // Skills List

    let topSkillsList = '<li>HTML5</li><li>CSS3</li><li>JavaScript/JQuery</li><li>PHP</li>';
    let bottomSkillsList = '<li>WordPress</li><li>Sketch</li><li>Figma</li><li>Git</li>';

    $('.skills .top-list').append(topSkillsList.repeat(4));
    $('.skills .bottom-list').append(bottomSkillsList.repeat(4));

    // Education List

    let topEducationList = '<li>B.S. <span>in</span> Astrophysics</li><li>California State University, Northridge</li>';
    let bottomEducationList = '<li>FreeCodeCamp.org</li><li>FrontEndMentor.io</li><li>Personal Projects</li>';

    $('.education .top-list').append(topEducationList.repeat(4));
    $('.education .bottom-list').append(bottomEducationList.repeat(4));

    // Buttons

    $('.btn.open-skills').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      if ($('.skills-front').hasClass('active')) {

        $(this).removeClass('active');
        $('skills').removeClass('active');

        setTimeout(function() {
          $('.skills-front .letter.green').removeClass('active');
        }, 250);

      } else {

        $(this).addClass('active');
        $('.skills-front .letter.green').addClass('active');

        setTimeout(function() {
          $('.skills').addClass('active');
        }, 250);

      }

    });

});