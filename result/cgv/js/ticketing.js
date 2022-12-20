// const aTag = document.getElementsByTagName("a");
// const aTagLogo = document.getElementsByTagName("#header-bottom #logo");
//     for(i=0;i<aTag.length;i++){
//         aTag[i].addEventListener("click",function(e){
//             e.preventDefault();
//     });
// }

const movieBody = document.querySelector("#ticketing-box .movie .body");
const movieUl = movieBody.querySelector("ul");
const movieLi= movieUl.querySelectorAll("li");

for(let i=0; i<movieLi.length; i++){
    movieLi[i].addEventListener("click",function(){
        movieUl.querySelector(".selected").classList.remove("selected");
        movieLi[i].classList.add("selected");
    });
}

const theaterBody = document.querySelector("#ticketing-box .theater .body");
const mainArea = theaterBody.querySelector(".main-area");
const subArea = theaterBody.querySelector(".sub-area");


for(let i=0; i<mainArea.querySelectorAll("li").length; i++){
    mainArea.querySelectorAll("li")[i].addEventListener("click", function(){
        // mainArea 선택  
        mainArea.querySelector("li.selected").classList.remove("selected");
        mainArea.querySelectorAll("li")[i].classList.add("selected");
        // subArea 초기화
        subArea.querySelector("li.active a.selected").classList.remove("selected");
        subArea.querySelectorAll("li.active a")[0].classList.add("selected");
        // subArea 활성화
        subArea.querySelector("li.active").classList.remove("active");
        subArea.querySelectorAll("li")[i].classList.add("active");
        console.log(subArea.querySelectorAll("li.active a"));

        for(let j=0; j<subArea.querySelectorAll("li.active a").length; j++){
            subArea.querySelectorAll("li.active a")[j].addEventListener("click", function(){
                subArea.querySelector("li.active a.selected").classList.remove("selected");
                subArea.querySelectorAll("li.active a")[j].classList.add("selected");
            });
        }
    });
    for(let j=0; j<subArea.querySelectorAll("li.active a").length; j++){
        subArea.querySelectorAll("li.active a")[j].addEventListener("click", function(){
            subArea.querySelector("li.active a.selected").classList.remove("selected");
            subArea.querySelectorAll("li.active a")[j].classList.add("selected");
        });
    }
}

// console.log(subArea.querySelectorAll("li.selected a"));



const dateBody = document.querySelector("#ticketing-box .date .body");
const dateUl = dateBody.querySelector("ul");
const dateLi = dateBody.querySelectorAll("li");

for(let i=0; i<dateLi.length; i++){
    dateLi[i].addEventListener("click",function(){
        dateUl.querySelector(".selected").classList.remove("selected");
        dateLi[i].classList.add("selected");
    });
}



















// const movieUl = document.querySelector("#ticketing-box .movie ul");
// console.log(movieUl);
 
//     function select(ulEl, liEl){
//         Array.from(ulEl.children).forEach( // ul의 자식 li를 배열로 지정하고 반복하기
//             v => v.classList.remove('selected') // 반복해서 selected라는 클래스를 지우기
//         )
//         if(liEl) liEl.classList.add('selected'); // liEl라면 selected라는 클래스를 더하기
//     }

//     movieUl.addEventListener('click', e => {  //ul 메뉴랩이 클릭되었을때 이벤트 작동
//         const selected = e.target;  //클릭된 요소를 변수에 담기
//         select(movieUl, selected); //만들었던 함수 select 적용하기 (선택된 요소만 selected 클래스 더하기)
//     })