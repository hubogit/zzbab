$(".add_btn").click(function(e) {
	$(".add_con_list").fadeToggle();
	$(document).one("click", function() {
		$(".add_con_list").fadeOut();
	});
	e.stopPropagation();
})
//轮播
TouchSlide({
	slideCell: "#picScroll",
	titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	effect: "leftLoop",
	autoPage: true, //自动分页
	pnLoop: "false", // 前后按钮不循环
	switchLoad: "_src" //切换加载，真实图片路径为"_src" 
});
//倒计时
function countDown(startTime, endTime, fn) {
	var maxtime = (new Date(startTime) - new Date()) / 1000;
	var mintime = (new Date(endTime) - new Date()) / 1000;
	var timer = setInterval(function() {
		if(maxtime >= 0) {
			var dd = parseInt(maxtime / 60 / 60 / 24, 10);
			//计算剩余的天数 
			var hh = parseInt(maxtime / 60 / 60 % 24, 10);
			var hh = dd*24;
			//计算剩余的小时数
			var mm = parseInt(maxtime / 60 % 60, 10);
			//计算剩余的分钟数
			var ss = parseInt(maxtime % 60, 10);
			//计算剩余的秒数
			dd = checkTime(dd);
			hh = checkTime(hh);
			mm = checkTime(mm);
			ss = checkTime(ss);
			msg =  "<i>距离开始</i>"+"<span class='timeColor'>" + hh + "</span>" + "<i>:</i>" + "<span class='timeColor'>" + mm + "</span>" + "<i>:</i>" + "<span class='timeColor'>" + ss + "</span>";
			fn(msg);
			--maxtime;
		} else if(mintime >= 0) {

			var dd = parseInt(mintime / 60 / 60 / 24, 10);
			//计算剩余的天数 
			var hh = parseInt(mintime / 60 / 60 % 24, 10);
			//计算剩余的小时数
			var mm = parseInt(mintime / 60 % 60, 10);
			//计算剩余的分钟数
			var ss = parseInt(mintime % 60, 10);
			//						//计算剩余的秒数
			dd = checkTime(dd);
			hh = checkTime(hh);
			mm = checkTime(mm);
			ss = checkTime(ss);
			msg =   "<span class='timeColor'>" + dd + "</span>" + "<i>天</i>" + "<span class='timeColor'>" + hh + "</span>" + "<i>时</i>" + "<span class='timeColor'>" + mm + "</span>" + "<i>分</i>" + "<span class='timeColor'>" + ss + "</span>" + "<i>秒</i>" ;
			fn(msg);
			--mintime;
		} else {
			clearInterval(timer)
			fn("活动已结束");
		}
	}, 1000);
}

function checkTime(i) {
	if(i < 10) {
		i = "0" + i;
	}
	return i;
}