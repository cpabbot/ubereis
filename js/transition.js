var isOrderFormOpen = false;

$(document).ready(function() {
    
    $('.order-form').click(function() {
        if(!isOrderFormOpen) {
            $('.order-form').animate({
                bottom: '0px'
            }, 10);
            $('.order-form').css("cursor", "default");
            $('.order-form__title').css("cursor", "text");

            $('.home-filter-cover').css("zIndex", 2);
            $('.home-filter-cover').animate({
                backgroundColor: "rgba(25,25,25,.8)"
            });
            $('input').focus();
            isOrderFormOpen = true;
        }
    });
    
    $('.home-filter-cover').click(function() {
        if(isOrderFormOpen) {
            $('.order-form').animate({
                bottom: '-180px'
            }, 10);
            $('.order-form').css("cursor", "pointer");
            $('.order-form__title').css("cursor", "pointer");

            $('.home-filter-cover').css("zIndex", 1);
            $('.home-filter-cover').animate({
                backgroundColor: "rgba(45,45,45,.54)"
            });
            isOrderFormOpen = false;
        }
    });
    
    $('.order-form').hover(function() {
        if(!isOrderFormOpen) {
            $(this).css("bottom", -170);
        }
    }, function() {
        if(!isOrderFormOpen) {
            $(this).css("bottom", -180);
        }
    });
    
});