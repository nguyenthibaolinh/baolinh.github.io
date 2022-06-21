// const searchShow = document.querySelector('#inpS')
// const searchDisable = document.querySelector('.search-result-close')
// searchDisable.addEventListener("click", function() {
//     document.querySelector('.search-result').style.display ='none'
// })
// searchShow.addEventListener("click", function() {
//     document.querySelector('.search-result').style.display ='block'
// })

// ----------tao nut len dau trang-----------

$(function(){
$(window).scroll(function () {
if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
else $(".lentop").fadeOut();
});
$(".lentop").click(function () {
$("body,html").animate({scrollTop: 0}, "slow");
});
});
