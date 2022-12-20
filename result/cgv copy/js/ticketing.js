// const aTag = document.getElementsByTagName("a");
// const aTagLogo = document.getElementsByTagName("#header-bottom #logo");
//     for(i=0;i<aTag.length;i++){
//         aTag[i].addEventListener("click",function(e){
//             e.preventDefault();
//     });
// }

const movieBody = document.querySelector("#ticketing-box .movie .body");
const movieUl = movieBody.querySelector("ul");
let moviePane = movieUl.getElementsByTagName("li");

for(let i=0; i<moviePane.length; i++){
    moviePane[i].addEventListener("click",function(){
        movieUl.getElementsByClassName("selected")[0].classList.remove("selected");
        moviePane[i].classList.add("selected");
    });
}

// ///////////////// 기본 /////////////////////
// const theaterBody = document.querySelector("#ticketing-box .theater .body");
// const mainArea = theaterBody.querySelector(".main-area");
// const subArea = theaterBody.querySelectorAll(".sub-area")[0];

// let mainAreaPane = mainArea.getElementsByTagName("li");


for(let i=0; i<mainAreaPane.length; i++){
    mainAreaPane[i].addEventListener("click",function(){
        mainArea.getElementsByClassName("selected")[0].classList.remove("selected");
        mainAreaPane[i].classList.add("selected");

        subArea.getElementsByClassName("selected")[0].classList.remove("selected");
        subArea.getElementsByTagName("li")[i].classList.add("selected");

        let subAreaPane = subArea.getElementsByTagName("a");
        for(let i=0; i<subAreaPane.length; i++){
            subAreaPane[i].addEventListener("click",function(){
                mainArea.getElementsByClassName("selected")[0].classList.remove("selected");
                mainAreaPane[i].classList.add("selected");
                console.log(mainArea.getElementsByClassName("selected")[0]);
            });
        }
    }); 
}


const theaterBody = document.querySelector("#ticketing-box .theater .body");
const mainAreaLi = theaterBody.querySelector(".main-area li");
const subArea = mainAreaLi.querySelectorAll(".sub-area");

for(let i=0; i<mainAreaLi.length; i++){
	mainAreaLi[i].addEventListener("click",function(){
		subArea.querySelector("selected").classList.remove("selected");
		subArea.querySelectorAll("li")[i].classList.add("selected");
	}); 
}

const serviceCont = document.querySelector("section.service .cont");
		const serviceTabLi = serviceCont.querySelectorAll(".tab li")
		const serviceTabItembox = serviceCont.querySelector(".item-box");

		for (let i=0; i<serviceTabLi.length; i++) {
			// 탭 li 클릭할때마다 함수
			serviceTabLi[i].onclick = function() {
				serviceTabItembox.querySelector(".active").classList.remove("active");
				// 탭을 누르면 클릭했던 아이템박스 액티브 초기화
				serviceTabItembox.querySelectorAll(".item")[i].classList.add("active");
				// 선택된 아이템 박스 액티브
				styleSec_btnCnt = 0;
				// 마지막으로 카운터는 0으로 마춰준다
	
				for (let i of serviceTabLi) //j
					if (carouselBtnCnt_0 == 0) { i.style.left = '0px'; }
					// 0으로 마추어지면 슬라이드가 초기화 된다
			}
		}