
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
    
})










