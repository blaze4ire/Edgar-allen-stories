var hide = "Hide Synopsis";
var show = "Show Synopsis";
$(document).ready(function () {
    //alert("jQuerys ready!");
    $(".button-work").click(function () {
        $(this).next().slideToggle();
        $(this).next().next().slideToggle();

        $(this).toggleClass("open");

        if ($(this).hasClass("open")) {
            $(this).html(hide);
        } else {
            $(this).html(show);
        }
    });
    $(".image2").click(function () {
        alert("working!");
        $(HTMLBodyElement).addClass(blood - overlay);
    })
});