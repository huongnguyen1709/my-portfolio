
$(document).ready(function() {
    /* JQUERY SMOOTH SCROLL NAV BAR */
    $('.btn-click, .nav-link').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top // scroll from top
                },
                800 // speed scroll
            );
        }
    });

    /* UP ARROW BUTTON */
    $('.up-arrow').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });

    /* HAMBURGER MENU */
    $('.ham-btn').click(function() {
        $('.ham-btn').toggleClass('active');
        $('.toggle-menu').toggleClass('active');
    });

    $('.nav-link').click(function() {
        $('.ham-btn').removeClass('active');
        $('.toggle-menu').removeClass('active');
    });

    /* Animation on Page Load */
    $(window).scroll( function(){
        $('.about-desc').each( function(i){

            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_element ){
                $(this).animate({'opacity':'1','margin-left':'7%'},1500);
            }

        });

        $('.skills-heading').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'0rem'},1500);
            }

        });

        $('.container').each( function(i){

            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0rem'},1700);
            }

        });

        $('.card-left').each( function(i){
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_element ){
                $(this).animate({'opacity':'1','margin':'8rem 0 8rem 5.5rem'},1500);
            }

        });

        $('.card-right').each( function(i){
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_element ){
                $(this).animate({'opacity':'1','margin':'8rem 0 8rem 5.5rem'},1500);
            }

        });

        $('.contact-text, .form, .contact-info').each( function(i){

            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_element ){
                $(this).animate({'opacity':'1'},1500);
            }

        });


    });

})














