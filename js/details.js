//头部
$(".deta_right_curr").click(function(e) {
	$(".add_con_list").fadeToggle();
	$(document).one("click", function() {
		$(".add_con_list").fadeOut();
	});
	e.stopPropagation();
})
//TouchSlide({
//	slideCell: "#bannerslide",
//	effect: "leftLoop",
//	mainCell: ".maincell",
//	titCell: ".titcell",
//	autoPage: true
////	switchLoad:"_src"
//})
var swiper1 = new Swiper('#bannerslide');
var swiper2 = new Swiper('.swiper-container1')
var swiper3 = new Swiper('.swiper-container', {
    nextButton: '.pri_r',
    prevButton: '.pri_l',
    paginationType: 'fraction',
    slidesPerView: 4,
});
function scrollNav() {
	var arr = [];
	var scrollDom = $(".item_show");
	var navDom = $("#navFixed li");

	var newClass = "check";

	scrollDom.each(function() {
		arr.push([$(this).offset().top, $(window).scrollTop() + 80]);
	})
	for(i = arr.length; i >= 1; i--) {
		if(arr[i - 1][0] < arr[i - 1][1]) {
			navDom.eq(i - 1).addClass(newClass).siblings().removeClass(newClass);
			break;
		}
	}

}

function winScroll() {
	var winScorll = $(window).scrollTop();
	var navScroll = $(".item_nav").offset().top;
	if(winScorll >= navScroll) {
		$("#navFixed").addClass("hu_check")
	} else {
		$("#navFixed").removeClass("hu_check")
	}
	if(winScorll > 80) {
		$(".deta_top").hide()
	} else {
		$(".deta_top").show()
	}
}
//主导航点击时激活窗口滚动

var initArr = [];
var floorLength = $(".item_show").size();
$(window).scroll(function(){
//循环得出最新的楼层绝对位置信息存储数组
	for(i = 0; i < floorLength; i++) {
		var offsetTop = $(".item_show").eq(i).offset().top;
		initArr[i] = offsetTop;
	}
})

$("#navFixed li").on("click", function(e) {
	var _index = $(this).index();
		$("body,html").animate({
			"scrollTop": initArr[_index] -50 //48是导航的高度
		}, 200);
});


scrollNav()
winScroll()
$(window).scroll(function() {
	winScroll()
	scrollNav()

})
//底部日历弹出
$(".more_tuanqi").click(function() {
	$(".funDate").slideToggle();
	$(".filter_mask").show();

})
$(".Determine a").click(function() {
	$(".funDate").slideToggle();
	$(".filter_mask").hide();
})