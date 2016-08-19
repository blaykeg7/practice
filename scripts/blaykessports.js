
var isMenuOpen = false;




$(".dropdown").click(function(){
    //clear all show classes for all dropdowns
    $(".dropdown").not($(this)).removeClass("show");

    //toggle show on the one that was clicked.
    
$(this).toggleClass ("show");

});
