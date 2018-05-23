$(".add_btn").click(function(e) {
				$(".add_con_list").fadeToggle();
				$(document).one("click", function() {
					$(".add_con_list").fadeOut();
				});
				e.stopPropagation();
			})
			$(".filter_mask").on('click', function(e) {
				e.stopPropagation();
				$(this).hide();
				$(".xlist_con_text").slideUp();
				$(".xlist_left_text").css({
					"right": "-80%"
				});
				rightHide = true;
			})
			$(".xlist_nav>ul>li").click(function(e) {
				e.stopPropagation();
				if($(this).find(".xlist_con_text").is(":visible")) {
					$(".filter_mask").hide();
				} else {
					$(".filter_mask").show();
				}
				$(this).siblings().children(".xlist_con_text").slideUp();
				$(this).children(".xlist_con_text").slideToggle();
				if($(this).index() < 2) {
					$(".xlist_left_text").css({
						"right": "-80%"
					});
					rightHide = true;
				}
			})

			//Shai xuan
			let rightHide = true;
			$(".xlist_nav ul li.more_shaixuan").on("click", function(e) {
				e.stopPropagation();
				$(this).siblings().children(".xlist_con_text").slideUp();
				$(".xlist_left_text").animate({
					"right": 0
				});
			})
			$(".queding_btn,.quxiao_btn").click(function(e) {
				$(".filter_mask").hide();
				$(".xlist_left_text").animate({
					"right": "-80%"
				})
				e.stopPropagation();
			})
			//			日历
			var calendar = new LCalendar();
			calendar.init({
				'trigger': '#start_date', //标签id
				'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
				'minDate': (new Date().getFullYear() - 3) + '-' + 1 + '-' + 1, //最小日期
				'maxDate': (new Date().getFullYear() + 3) + '-' + 12 + '-' + 31 //最大日期
			});
			var calendar = new LCalendar();
			calendar.init({
				'trigger': '#end_date', //标签id
				'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
				'minDate': (new Date().getFullYear() - 3) + '-' + 1 + '-' + 1, //最小日期
				'maxDate': (new Date().getFullYear() + 3) + '-' + 12 + '-' + 31 //最大日期
			});
			$("#start_date,#end_date").focus(function() {
				document.activeElement.blur();
			});