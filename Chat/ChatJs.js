'use strict'

const chat_Main = document.getElementsByClassName('main')[0];
const chat_NowTime = document.getElementsByClassName('NowTime');

let new_p_elem = [];

let nowhours = TimeZero(moment().hours());
let nowMinutes = TimeZero(moment().minutes());
let nowSeconds = TimeZero(moment().seconds());

chat_NowTime[0].innerText = nowhours + ":" + nowMinutes + ":" + nowSeconds;  

function OutPutData() {
		const chat_InputData = document.getElementById('InputData');
		new_p_elem.push(document.createElement('p'));
		new_p_elem[new_p_elem.length - 1].textContent = chat_InputData.value;
		console.log(new_p_elem[new_p_elem.length - 1]);
		chat_Main.appendChild(new_p_elem[new_p_elem.length - 1]);
		chat_InputData.value = "";
	
}

function RamdomBackColor(){
	const max = 256;
	const r = Math.floor(Math.random() * max)
	const g = Math.floor(Math.random() * max)
	const b = Math.floor(Math.random() * max)
	console.log("rgb("+ r +"," + g + "+, "+ b +" )");
	chat_Main.style.backgroundColor = "rgb("+ r +"," + g + ", "+ b +" )";
}

function TimeZero(timeValue){
	if(String(timeValue).length == 1){
		return "0" + timeValue +"";
	}
	return timeValue;
}

window.addEventListener('DOMContentLoaded', function(){
	    
	setInterval((args) => {
		nowhours = TimeZero(moment().hours());
		nowMinutes = TimeZero(moment().minutes());
		nowSeconds = TimeZero(moment().seconds());
		chat_NowTime[0].innerText = nowhours + ":" + nowMinutes + ":" + nowSeconds;
	}, 500);
});