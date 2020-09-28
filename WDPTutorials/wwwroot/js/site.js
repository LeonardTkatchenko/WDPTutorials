// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//jQuery.cshtml (Week 6 Tutorial Answer and Question 2 of Lab Week 9)
$(document).ready(function () {
    $(".bg").click(function () {
        // implement jQuery for click here
        // Question 1
        $(".centre").css("backgroundImage", $(this).css("backgroundImage"));
        $(".centre").css("backgroundSize", "100%");
        // Question 2
        $(".centre").slideDown(1000);
    });

    $(".bg").mouseenter(function () {
        // implement jQuery for mouseenter here
        // Question 1
        $(this).css("opacity", "0.6");
        // Question 2
        $(".centre").slideUp(1000);
    });

    $(".bg").mouseleave(function () {
        // implement jQuery for mouseleave here
        // Question 1
        $(this).css("opacity", "1.0");
        // Question 2
        $(".centre").slideUp(1000);
    });
});
