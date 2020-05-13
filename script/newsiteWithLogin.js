$(document).ready(function(){
	var zg = localStorage.getItem('users');
	var usersData = JSON.parse(zg);
	for(let i = 0 ; i < usersData.length ; i++){
		if(usersData[i].online == true){
			$("#person").text(usersData[i].usernameKey);
			usersData[i].online = false;
			localStorage.setItem('users',JSON.stringify(usersData));
			break;
		}
	}
});