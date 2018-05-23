//验证手机
function checkMobile() {
	var mobile = $('#mobile').val();
	if(mobile == ""){
		$("#zzdy_lv").html("请输入手机号").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	}
	if(!(/^1[34578][0-9]{9}$/.test(mobile))) {
		$("#zzdy_lv").html("手机号错误，请重新输入").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);

		return false;
	}
};
//验证邮箱格式
function checkEmail() {
	var email = $('#email').val();
	if(email == ""){
		$("#zzdy_lv").html("请输入邮箱").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	}
	if(!(/^([a-zA-Z0-9_-]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email))) {
		$("#zzdy_lv").html("邮箱错误，请重新输入").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);

		return false;
	}
}

//验证密码
function checkPwd() {
	var password = $('#password').val();
	if(password == ""){
		$("#zzdy_lv").html("请输入密码").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	}
	if(!(/^(?=.*?\d)(?=.*?[A-Za-z])[A-Za-z\d]{8,20}$/.test(password))) {
		$("#zzdy_lv").html("密码格式错误，请重新输入").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);

		return false;
	}
};
//验证再次输入的密码
function checkPwd2() {
	var password = $('#password').val();
	var password2 = $('#password2').val();
	if(password2 == '') {
		$("#zzdy_lv").html("请再次输入密码").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	} else if(password != password2) {
		$("#zzdy_lv").html("密码不一致").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	}
};
//手机验证ma获取
var countdown = 60;
var time = document.getElementById('iphone_code');

function settime() {
	if(checkMobile() == false) {
		checkMobile();
		return false;
	} else {
		if(countdown == 0) {
			time.style.color = "#101010";
			time.removeAttribute("disabled");
			time.innerHTML = "重新获取";
			countdown = 60;
			return;
		} else {
			time.style.color = "#bbb";
			time.setAttribute("disabled", true);
			time.innerHTML = "重新获取(" + countdown + ")";
			countdown--;

		}
	}
	setTimeout(function() {
		settime(time);
	}, 1000);

}
//手机验证码验证
function verificationCode() {
	var ynzhengCode = $("#verificationCode").val();
	if(ynzhengCode == ""){
		$("#zzdy_lv").html("请输入手机验证码").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	}
	if(!(/^\d{6}$/.test(ynzhengCode))) {
		$("#zzdy_lv").html("验证码错误").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	}
}
//最后验证码
$(".login_sub").click(function(e) {
	if(checkMobile() == false || checkEmail() == false || checkPwd() == false || checkPwd2() == false ||verificationCode() == false) {
		e.preventDefault();
	} else {
		$("#zzdy_lv").html("注册成功").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
	}
});