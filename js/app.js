// counter 

let counted = 0;
$(window).scroll(function() {

    const oTop = $('.counter-ul').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
        const $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
            },

            {

            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }

            });
        });
        counted = 1;
    }
});



