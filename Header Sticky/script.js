jQuery(document).ready(function($) {
    var header = $('header'); // Change this selector to match your header element
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) { // When scrolled more than 50px
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });
});
