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
		$("#zzdy_lv").html("密码错误，请重新输入").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);

		return false;
	}
};
//验证码
var code;

function createCode() {
	code = "";
	var codeLength = 4; //验证码的长度
	var checkCode = document.getElementById("checkCode");
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
	for(var i = 0; i < codeLength; i++) {
		var charNum = Math.floor(Math.random() * 52);
		code += codeChars[charNum];
	}
	if(checkCode) {
		checkCode.className = "code";
		checkCode.innerHTML = code;
	}
}
createCode();
//信息填写对错判断
function checkCode() {
	var _this = $(this);
	var icode = $('#icode').val().toLocaleLowerCase();
	var checkCode = $("#checkCode").html().toLocaleLowerCase();
	if(icode == ""){
		$("#zzdy_lv").html("请输入验证码").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	}
	if(icode != checkCode) {
		$("#zzdy_lv").html("验证码错误，请重新输入").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
		return false;
	}
}
$(".login_sub").click(function(e) {
	if(checkMobile() == false || checkPwd() == false || checkCode() == false) {
		e.preventDefault();
	} else {
		$("#zzdy_lv").html("登录成功").show()
		setTimeout(function() {
			$("#zzdy_lv").hide()
		}, 1000);
	}
});