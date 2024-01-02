$(document).ready(function () {


    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).find("span").attr("data");
        $(activeTab).fadeIn();
        return false;
    });

    //다른 페이지에서 이동할때 필요한 코드
    var location = window.location.hash;
    var tab_arr = [];
    $(".tabs li span").each(function (index, element) {
        tab_arr.push($(this).attr("data"));
    });

    var numb = jQuery.inArray(location, tab_arr)
    $('.tabs li').removeClass("active");
    $('.tabs li').eq(numb).addClass("active");
    $(".tab_content1").hide();
    $('.tab_container1').find(location).show();

    return false;

});