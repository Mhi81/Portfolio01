'use strict'


const Port_h3 = document.querySelectorAll('h3');
const Port_h3_Class = ['my-previous','my-current','my-future']
const new_div_elem = [];


for(let i = 0;i < Port_h3.length; i++){
	Port_h3[i].style.color = 'dodgerblue';
	Port_h3[i].className = Port_h3_Class[i];
	new_div_elem[i] = document.createElement('div');
	new_div_elem[i].className = 'priorities';
	if(i == 0)new_div_elem[i].innerHTML = '情報系の専門学校を卒業<br>一般のIT企業に２年間勤務';
	if(i == 1)new_div_elem[i].innerHTML = 'ゲーム制作に特化した専門学校に入学<br>今年度の３月に卒業見込み！';
	if(i == 2)new_div_elem[i].innerHTML = '仕事等を通して、新たなスキルを手に入れる<br>より高品質なゲームを作る！！';
	Port_h3[i].appendChild(new_div_elem[i]);
}

const Port_div = document.querySelectorAll('div');

for(let doc of Port_h3){
	doc.style.color = 'dodgerblue'; 
}

/*

for(let doc of Port_h3){
	doc.style.color = 'dodgerblue'; 
	console.log(doc.innerText);
}

$(function(){
        $('.slist').hide();        
        $('.malist').click(function(){
                $('ul.slist').slideUp();
                if($('+ul.slist',this).css('display') == 'none'){
                        $('+ul.slist',this).slideDown();
                }
        });
});


function ListText(Page){
	if(Page==1){
		target = document.getElementById("output");
		target.innerHTML = "<div id='page1'><h1>過去</h1><img src='../img/kako.jpg' width='400' height='300' id='page1'></img><ul><li>情報系の専門学校を卒業</li><li>一般のIT企業に２年間勤務</li></ul></div>";
	}
	if(Page==2){
		target = document.getElementById("output");
		target.innerHTML = "<div id='page2'><h1>現在</h1><img src='../img/genzai.jpg' width='200' height='300'></img><ul><li>ゲーム制作に特化した専門学校に入学</li><li>今年度の３月に卒業見込み！</li></ul></div>";
	}
	if(Page==3){
		target = document.getElementById("output");
		target.innerHTML = "<div id='page3'><h1>未来</h1><img src='../img/mirai.png' width='400' height='300'></img><ul><li>仕事等を通して、新たなスキルを手に入れる</li><li>より高品質なゲームを作る！！</li></ul></div>";
	}

}
*/