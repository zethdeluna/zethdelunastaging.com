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

    // Fade Up

    function scrollFade() {
      didScroll = true;
      let $windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      $('.fade-up').each(function() {
        let $elementPos = $(this).offset().top;
        if ($elementPos < $windowBottom) $(this).addClass('active');
        else $(this).removeClass('active');
      });

    }

    var didScroll = false;

    $('.project-detail .content').on('scroll', scrollFade);

    setInterval(function() {
      if ( didScroll ) {
          didScroll = false;
          // Check your page position and then
          // Load in more results
      }
    }, 250);

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
              $('nav .jump-links').removeClass('active');
            $('nav .my-info').removeClass('active');
            }, 750);

        } else {
            $(this).text('Close');

            $('html').addClass('nav-open');
            $('nav').addClass('active');
            $('nav .jump-links').addClass('active');
            $('nav .my-info').addClass('active');

            setTimeout(function() {
                $('.nav-container').addClass('active');
            }, 500);
        }

    });

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

        $('.skills-front').removeClass('active');
        $('.skills').removeClass('active');

        setTimeout(function() {
          $('.skills-front .letter.green').removeClass('active');
        }, 250);

      } else {

        $('.skills-front').addClass('active');
        $('.skills-front .letter.green').addClass('active');

        setTimeout(function() {
          $('.skills').addClass('active');
        }, 250);

      }

    });

    $('.btn.open-edu').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      if ($('.edu-front').hasClass('active')) {

        $('.edu-front').removeClass('active');
        $('.education').removeClass('active');

        setTimeout(function() {
          $('.edu-front .letter.gray').removeClass('active');
        }, 250);

      } else {

        $('.edu-front').addClass('active');
        $('.edu-front .letter.gray').addClass('active');

        setTimeout(function() {
          $('.education').addClass('active');
        }, 250);

      }

    })

    /**********Projects**********/

    function previewHover($project_number) {
      let $button = $('#project-btn-'+$project_number);
      let $previewImage = $('#preview-img-'+$project_number);
      let $previewDescription = $('#preview-descr-'+$project_number);

      $button.on('mouseenter', function() {

        $('.preview-image').each(function() {
          $(this).removeClass('active');
        });
        $('.preview-description').each(function() {
          $(this).removeClass('active');
        });

        $previewImage.addClass('active');
        $previewDescription.addClass('active');

      });

    }

    // Project Details

    function openProject($project_number) {
      let $selector = '#project-detail-'+$project_number;
      let $button = $('#project-btn-'+$project_number);
      let $project = $($selector);
      let $background = $($selector+' .background');
      let $container = $($selector+' .content');
      let $heading = $($selector+' h2');
      let $date = $($selector+' .date');
      let $headingSpan = $($selector+' h2 span');
      let $subheading = $($selector+' p.subheading');
      let $subheadingSpan = $($selector+' p.subheading span');
      let $hero = $($selector+' .project-hero');
      let $fadeUpElement = $($selector+' .fade-up');

      function projectClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        if ($project.hasClass('active')) {

          $date.removeClass('active');
          $fadeUpElement.each(function() { $(this).removeClass('active'); });
          $headingSpan.removeClass('active');
          $hero.removeClass('active');
          $subheadingSpan.removeClass('active');

          setTimeout(function() {
            $background.removeClass('active');
            $container.removeClass('active');
          }, 500);

          setTimeout(function() {
            $heading.removeClass('active');
            $project.removeClass('active');
            $subheading.removeClass('active');
          }, 1000)
          
        }
        else {
          $background.addClass('active');
          $project.addClass('active');

          setTimeout(function() {
            $container.addClass('active');
          }, 250);

          setTimeout(function() {
            $heading.addClass('active');
            $subheading.addClass('active');
          }, 750);

          setTimeout(function() {
            $date.addClass('active');
            $fadeUpElement.each(function() { $(this).addClass('active'); });
            $headingSpan.addClass('active');
            $hero.addClass('active');
            $subheadingSpan.addClass('active');
          }, 1250);

        }
      }

      $button.on('click', projectClick);
      $background.on('click', projectClick);

    }

    let project_numbers = [1, 2, 3, 4, 5, 6, 7];

    $.each(project_numbers, function(index, value) {
      let numStr = value.toString();
      previewHover(numStr);
      openProject(numStr);
    });

});