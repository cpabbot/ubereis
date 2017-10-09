$(document).ready(function() {
    
    $('.enter-next').bind("enterKey",function(e){
        nextElement(300);
    });
    $('.enter-next').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });
    
    $('.nav-order-btn.right').click(function() {
        nextElement(300);
    });
    
    $('.nav-order-btn.left').click(function() {
        prevElement(300);
    });
    
});

function nextElement(speed) {
    //alert("next element");
    $('.active').fadeOut(speed, function() {
        $(this).removeClass('active').next().fadeIn(speed, function() {
            $(this).addClass('active');
        }).css("display","inline-block");
    });
}

function prevElement(speed) {
    //alert("next element");
    $('.active').fadeOut(speed, function() {
        $(this).removeClass('active').prev().fadeIn(speed, function() {
            $(this).addClass('active');
        }).css("display","inline-block");
    });
}