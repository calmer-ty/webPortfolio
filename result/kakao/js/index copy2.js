function mainSlide() {
	const firstSlide = document.querySelector(".slider .item:first-child");
	const currentSlide = document.querySelector(".slider .item.active");

	if (currentSlide) {
		currentSlide.classList.remove("active");
		const nextSlide = currentSlide.nextElementSibling;

		if (nextSlide)
			nextSlide.classList.add("active");
		else
			firstSlide.classList.add("active");
	} else 
		firstSlide.classList.add("active");
	
}
setInterval(mainSlide, 5000);

const styleSec_cont = document.querySelector(".style.sec .cont");
const styleSec_itemLi = styleSec_cont.querySelectorAll(".item li");
let styleSec_btnCnt = 0;

function styleSec_slide() {
	const styleSec_Btn = document.querySelectorAll(".style.sec .btn");

	styleSec_Btn[1].onclick = function() {
		// btn 1 누를떄마다
		styleSec_btnCnt ++;
		// 카운터를 1 올리고 시작
		for (let i of styleSec_itemLi) {
			if (styleSec_btnCnt  == 0) { i.style.left = '0px'; }
			if (styleSec_btnCnt  == 1) { i.style.left = '-330px'; }
			if (styleSec_btnCnt  == 2) { i.style.left = '-660px'; }
			if (styleSec_btnCnt  == 3) { i.style.left = '-990px'; }
			if (styleSec_btnCnt  == 4) { i.style.left = '-1320px'; }
			if (styleSec_btnCnt  > 3) { styleSec_btnCnt  = 3; }
		}
	}


	styleSec_Btn[0].onclick = function() {
		// btn 0 누를떄마다
		styleSec_btnCnt--;
		// 카운터를 1 내리고 시작
		for (let i of styleSec_itemLi) {
			if (styleSec_btnCnt == 0) { i.style.left = '0px'; }
			if (styleSec_btnCnt == 1) { i.style.left = '-330px'; }
			if (styleSec_btnCnt == 2) { i.style.left = '-660px'; }
			if (styleSec_btnCnt == 3) { i.style.left = '-990px'; }
			if (styleSec_btnCnt == 4) { i.style.left = '-1320px'; }
			if (styleSec_btnCnt < 0) { styleSec_btnCnt = 0; }
		}
	}
}




function styleSec_tab() {
	const styleSec_tab = styleSec_cont.querySelector(".tab");
	const styleSec_tabLi = styleSec_tab.querySelectorAll("li");
	const styleSec_itemBox = styleSec_cont.querySelector(".item-box");

	for (let i = 0; i < styleSec_tabLi.length; i++) {
		// 탭 li 클릭할때마다 함수
		styleSec_tabLi[i].onclick = function() {
			styleSec_itemBox.querySelector(".active").classList.remove("active");
			// 탭을 누르면 클릭했던 아이템박스 액티브 초기화
			styleSec_itemBox.querySelectorAll(".item")[i].classList.add("active");
			// 선택된 아이템 박스 액티브
			styleSec_btnCnt = 0;
			// 마지막으로 카운터는 0으로 마춰준다

			for (let i of styleSec_itemLi) //j
				if (styleSec_btnCnt == 0) { i.style.left = '0px'; }
				// 0으로 마추어지면 슬라이드가 초기화 된다
		}
	}
}



const styleFou_btn = document.querySelectorAll(".style.fou .btn");
const styleFou_itemLi = document.querySelectorAll(".style.fou .cont .item li");
let styleFou_btnCnt = 0;

function styleFou_move330(){
	styleFou_btn[1].onclick = function() {
		styleFou_btnCnt++;
		for (let i of styleFou_itemLi) {
			if (styleFou_btnCnt == 0) { i.style.left = '0px'; }
			if (styleFou_btnCnt == 1) { i.style.left = '-330px'; }
			if (styleFou_btnCnt == 2) { i.style.left = '-660px'; }
			if (styleFou_btnCnt == 3) { i.style.left = '-990px'; }
			if (styleFou_btnCnt == 4) { i.style.left = '-1320px'; }
			if (styleFou_btnCnt == 5) { i.style.left = '-1650px'; }
			if (styleFou_btnCnt > 5) { styleFou_btnCnt = 5; }
		}
	}
	styleFou_btn[0].onclick = function() {
		styleFou_btnCnt--;
		for (let i of styleFou_itemLi) {
			if (styleFou_btnCnt == 0) { i.style.left = '0px'; }
			if (styleFou_btnCnt == 1) { i.style.left = '-330px'; }
			if (styleFou_btnCnt == 2) { i.style.left = '-660px'; }
			if (styleFou_btnCnt == 3) { i.style.left = '-990px'; }
			if (styleFou_btnCnt == 4) { i.style.left = '-1320px'; }
			if (styleFou_btnCnt == 5) { i.style.left = '-1650px'; }
			if (styleFou_btnCnt < 0) { styleFou_btnCnt = 0; }
		}
	}
}

function styleFou_move480(){
	styleFou_btn[1].onclick = function() {
		styleFou_btnCnt++;
		for (let i of styleFou_itemLi) {
			if (styleFou_btnCnt == 0) { i.style.left = '0px'; }
			if (styleFou_btnCnt == 1) { i.style.left = '-480px'; }
			if (styleFou_btnCnt == 2) { i.style.left = '-960px'; }
			if (styleFou_btnCnt == 3) { i.style.left = '-1440px'; }
			if (styleFou_btnCnt == 4) { i.style.left = '-1920px'; }
			if (styleFou_btnCnt > 4) { styleFou_btnCnt = 4; }
		}
	}
	styleFou_btn[0].onclick = function() {
		styleFou_btnCnt--;
		for (let i of styleFou_itemLi) {
			if (styleFou_btnCnt == 0) { i.style.left = '0px'; }
			if (styleFou_btnCnt == 1) { i.style.left = '-480px'; }
			if (styleFou_btnCnt == 2) { i.style.left = '-960px'; }
			if (styleFou_btnCnt == 3) { i.style.left = '-1440px'; }
			if (styleFou_btnCnt == 4) { i.style.left = '-1920px'; }
			if (styleFou_btnCnt < 0) { styleFou_btnCnt = 0; }
		}
	}
}


function styleFou_moveTotal(){
	if(innerWidth < 768){
		styleFou_move330();
	} else if(innerWidth > 768){
		styleFou_move480();
	}
}


function fMenuAccordion(){
	const footerTop = document.querySelector("footer .top");
	const footerSubMenu = footerTop.querySelectorAll(".main-menu .sub-menu");

	let i;

	window.addEventListener('resize',function(){
		if(innerWidth < 768){
			for(i=0; i<footerSubMenu.length; i++)
				footerSubMenu[i].classList.replace("active", "inactive");	
		} else if(innerWidth > 768){
			for(i=0; i<footerSubMenu.length; i++)
				footerSubMenu[i].classList.replace("inactive", "active");
		}
	});
		
	if(innerWidth < 768){
		for(i=0; i<footerSubMenu.length; i++)
			footerSubMenu[i].classList.replace("active", "inactive");	
	} else if(innerWidth > 768){
		for(i=0; i<footerSubMenu.length; i++)
			footerSubMenu[i].classList.replace("inactive", "active");
	}		
}




window.addEventListener('resize', function() {
	if(innerWidth < 768){
		styleFou_move330();
	} else if(innerWidth > 768){
		styleFou_move480();
	}
});


 


function init(){
	styleSec_slide();
	styleSec_tab();
	styleFou_moveTotal();
	fMenuAccordion();

	$("a").on("click",function(event) {
		event.preventDefault();
	});
}
init();
// window.addEventListener("wheel", function(e){
//     e.preventDefault();
// },{passive : false});

