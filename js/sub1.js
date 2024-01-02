$(document).ready(function () {

    $(".tab_content3").hide();
    $("ul.tabs2 li:first").addClass("active").show();
    $(".tab_content3:first").show();
    $("ul.tabs2 li").click(function () {

        $("ul.tabs2 li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content3").hide();

        var activeTab = $(this).find("span").attr("data");
        $(activeTab).fadeIn();
        return false;
    });

});