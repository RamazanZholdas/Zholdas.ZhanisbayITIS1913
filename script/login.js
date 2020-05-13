$(document).ready(function(){
	$("button").click(function(){
		var flag = false;
		var usernameLogin = $('#usernameLogin').val();
		var passwordLogin = $("#passwordLogin").val();
		if (usernameLogin == "AdminBanner" && passwordLogin == "bigBanInLondon") {
			location.href ="../html/AdministratorSite.html";
		}
		if(localStorage.getItem('users') == null || localStorage.getItem('users') == undefined){
			$(".username").css('color','red');
			$('.username').text('Username Or Password isn\'t correct');
		}
		else{
			let a = localStorage.getItem('users');
			var checkmate = JSON.parse(a);
			for(var i =0 ; i<checkmate.length ; i++){
				if(checkmate[i].usernameKey == usernameLogin && checkmate[i].passwordKey == passwordLogin && checkmate[i].bann == false){
					checkmate[i].online = true;
					localStorage.setItem('users',JSON.stringify(checkmate));
					flag = true;
					break;
				}
				else{
					if (checkmate[i].bann != false) {
						alert('You have been banned! Sorry')
					}
					else{
						$(".username").css('color','red');
						$('.username').text('Username Or Password isn\'t correct');
					}
				}
			}
			if(flag == true){
				location.href = "../html/newsiteWithLogin.html";
			}
		}
	});
});