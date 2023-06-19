var name="Ngoc Huong xinh dep";
alert(name);
//console.log("Hello " + name);

function calculateAge(yearBorn) {
	var currentTime=new Date();
	var currentYear=currentTime.getFullYear();
	return currentYear-yearBorn;
	//console.log(currentYear);
}


var name=prompt("Enter your name: ");
//console.log(name);

var yearBorn=prompt("Enter the year you were born: ");
var age;
age=calculateAge(yearBorn);

console.log(name+" is "+age+" years old");

var message="";
if(age<18){
	//console.log("You are very young")
	message+="You are";
	var i=0;
	while (i<5){
		message+=" very";
		i++;
	}
	message+=" young";
	//console.log(message);
	if((age>5)&&(age<10)){
		message="You are a kid";
	}
}else if(age<50){
	message="You are quite young"
	//console.log("You are quite young");
}else{
	message="You are over 50 years old"
	//console.log("You are over 50 years old");
}

console.log(message);

var userChoice=prompt("Choose dam, la or keo: ");
var computerChoice=Math.floor(Math.random()*2);
if(computerChoice=0){
	computerChoice="dam";
}else if(computerChoice=1){
	computerChoice="la";
}else{
	computerChoice="keo";
}

console.log("You choose: "+userChoice);
console.log("Computer chooses: "+computerChoice);

var message="";
if(computerChoice===userChoice){
	message+="Draw";
}else if(computerChoice!=userChoice){
	if(computerChoice==="dam"){
		if(userChoice==="la"){
			message+="You win!";
		}else{
			message+="You lose";
		}
	}if(computerChoice==="la"){
		if(userChoice==="keo"){
			message+="You win!";
		}else{
			message+="You lose";
		}
	}if(computerChoice==="keo"){
		if(userChoice==="dam"){
			message+="You win!";
		}else{
			message+="You lose";
		}
	}
}

console.log(message);

var gender=prompt("Are you male or female? (m/f)");
switch(gender){
	case"m":
		console.log("You are a man");
		break;
	case"f":
		console.log("You are a woman");
		break;
	default:
		console.log("Wrong gender input. Undefined");
}

var isClose=confirm("Do you want to close current tab?");
console.log(isClose);
var message="";
if(isClose===true){
	message+="Bye";
	for(var i=0;i<7;i++){
		message+=" bye";
	}
	//window.close();
}else{
	message="Thank you for staying with me";
}
console.log(message);

function init(){
	var html_btn=document.getElementById("btn");
	html_btn.onclick=convert_button_click;
	var html_clickme=document.getElementById("clickme");
	html_clickme.onclick=convert_clickme_click;
	var html_education=document.getElementsByTagName("li")
	//console.log(html_education);
	//html_education[0].onclick=convert_edu_click;
	//console.log(html_education.length);
	var i=0;
	while(i<html_education.length){
		html_education[i].onclick=convert_edu_click;
		i++;
	}
}

function print_conversion(usd,vnd){
	var html_message=document.getElementById("message");
	html_message.textContent="You enter: "+usd+ " USD, this is converted to: "+ vnd+ "k VND";
}

function convert_button_click(){
	//alert("Test button");
	var usd=prompt("Enter USD: ");
	//console.log(usd);
	var vnd=usd*25;
	//console.log(vnd);
	print_conversion(usd,vnd);
}

function convert_clickme_click(){
	//alert("You clicked me");
	var html_happens=document.getElementById("happens");
	html_happens.innerHTML="<h1>Tadaaaa. Surprise...</h1>";
}

function convert_edu_click(){
	//alert("You cliked me")
	var html_rewards=document.getElementById("rewards");
	html_rewards.innerHTML="<strong>12/12 years of an excellent student. GPA 3.61/4.00 at the University.</strong>";
}

window.onload=init;