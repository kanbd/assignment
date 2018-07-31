function savedata(){
	if(JSON.parse(localStorage.getItem("users") || "[]")!=undefined)
		var users=JSON.parse(localStorage.getItem("users") || "[]");
	else
		var users=[];
	var person={};
	person['username']=document.getElementsByName('username')[0].value;
	person['password']=document.getElementsByName('password')[0].value;
	person['firstname']=document.getElementsByName('firstname')[0].value;
	person['lastname']=document.getElementsByName('lastname')[0].value;
	person['email']=document.getElementsByName('email')[0].value;
	person['Gender']=(function(){
		var gender=document.getElementsByName('Gender');
		if(gender[0].checked)
			return 'male';
		else if(gender[1].checked)
			return 'female';
		else
			return "";
	})();
	person['location']=document.getElementsByName('location')[0].value;
	removeerr();
	var checksub=true;
	for(var key in person){
		if(person[key]===""){
			createrr(key);
			checksub=false
		}
	}
	if(checksub){
		users.push(person);
		console.log(users);
		localStorage.users=JSON.stringify(users);
		listUser(person);
	}
}

function createrr(errname){
	var p=document.createElement('p');
	p.setAttribute('style','border-style:solid;border-color:red;border-width:6px');
	p.innerHTML='error: please fill the '+errname;
	p.setAttribute('class','err');
	console.log(errname);
	if(errname==="Gender"){
			console.log(errname);
			console.log(document.getElementsByName(errname));
			insertAfter(p,document.getElementsByName(errname)[1]);
		}
	else
		insertAfter(p,document.getElementsByName(errname)[0]);
	
}

function removeerr(){
	var listerr=document.getElementsByClassName("err");
	if(listerr==undefined)
		return;
	console.log(listerr);
	//listerr.remove();
	for(var k=listerr.length-1;k>=0;k--){
		console.log(listerr[k]);
	    listerr[k].remove();
	}
	// for(var key in listerr){
	// 	console.log(listerr[key]);
	// 	listerr[key].remove();
	// }
}

function listUser(user){
	var usertr=document.createElement('tr');
	for(var k in user){
		var usertd=document.createElement('td');
		usertd.innerHTML=user[k];
		usertr.appendChild(usertd);
	}
	document.getElementById('list_user').appendChild(usertr);
}

function insertAfter(newNode, referenceNode) {
	console.log(referenceNode);
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

console.log("finish");
var AllUsers=JSON.parse(localStorage.getItem("users") || "[]")
for(var i in AllUsers){
	listUser(AllUsers[i]);
}