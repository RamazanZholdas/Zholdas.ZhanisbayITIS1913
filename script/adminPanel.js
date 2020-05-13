$(document).ready(function(){
	$("#ban").click(function(){
		var ban = $('#search1').val();
		var hp = localStorage.getItem('users');
		var usersArray = JSON.parse(hp);
		for(let i = 0 ; i<usersArray.length; i++){
			if(usersArray[i].usernameKey == ban){
				usersArray[i].bann = true;
				localStorage.setItem('users',JSON.stringify(usersArray));
				location.href = "../html/AdminPanel.html";
				break;
			}
		}
	});
	$("#unban").click(function(){
		var ban = $('#search1').val();
		var hp = localStorage.getItem('users');
		var usersArray = JSON.parse(hp);
		for(let i = 0 ; i<usersArray.length; i++){
			if(usersArray[i].usernameKey == ban){
				usersArray[i].bann = false;
				localStorage.setItem('users',JSON.stringify(usersArray));
				location.href = "../html/AdminPanel.html";
				break;
			}
		}
	});
	$("#deleteUser").click(function(){
		var ban = $('#search1').val();
		var hp = localStorage.getItem('users');
		var usersArray = JSON.parse(hp);
		for(let i = 0 ; i<usersArray.length; i++){
			if(usersArray[i].usernameKey == ban){
				delete usersArray[i];
				localStorage.setItem('users',JSON.stringify(usersArray));
				location.href = "../html/AdminPanel.html";
				break;
			}
		}
	});
	if(localStorage.getItem('users') != null || localStorage.getItem('users') != undefined){
		var a = localStorage.getItem('users');
		var usersArr = JSON.parse(a);
		for(let i = 0 ; i < usersArr.length ; i++){
			var k = i;
			k++;
			var usernameAd = usersArr[i].usernameKey;
			var passwordAd = usersArr[i].passwordKey;
			var mailAd = usersArr[i].mailKey;
			var phoneAd = usersArr[i].phoneNumberKey;
			var fNameAd = usersArr[i].firstNameKey;
			var sNameAd = usersArr[i].secondNameKey;
			var countryAd = usersArr[i].countryKey;
			var banAd = usersArr[i].bann;
			$("tbody").append("<tr><td>"+ k +"</td><td>" + usernameAd + "</td><td>"+passwordAd+  "</td><td>" +mailAd + "</td><td>" + phoneAd + "</td><td>" + fNameAd + "</td><td>"+ sNameAd + "</td><td>"+countryAd + "</td><td>" + banAd +"</td></tr>");
		}
	}
	else{
		alert('There is no user here!');
	}
});