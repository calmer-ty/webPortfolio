const contPortfolio = document.querySelectorAll(".cont.portfolio");
const contType1 = document.querySelector(".cont.type1");
const contType2 = document.querySelector(".cont.type2");

const listItem = contPortfolio[0].querySelector(".list-item ul");
const listItem1 = contPortfolio[1].querySelector(".list-item ul");

console.log(listItem);
let itemCount = 0;

function prev() {
  if (curPos > 0) {
    postion += ITEM_WIDTH;
    list.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
}
function next() {
  if (curPos < 3) {
    postion -= ITEM_WIDTH;
    list.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
}

// 스와이프 슬라이드
function swipeSlide(list) {
  let curPos = 0;
  let postion = 0;
  let start_x, end_x;
  const ITEM_WIDTH = 390;

  list.addEventListener("touchstart", touch_start);
  list.addEventListener("touchend", touch_end);

  function prev() {
    if (curPos > 0) {
      postion += ITEM_WIDTH;
      list.style.transform = `translateX(${postion}px)`;
      curPos = curPos - 1;
    }
  }
  function next() {
    if (curPos < 3) {
      postion -= ITEM_WIDTH;
      list.style.transform = `translateX(${postion}px)`;
      curPos = curPos + 1;
    }
  }
  function touch_start(event) {
    start_x = event.touches[0].pageX;
  }
  function touch_end(event) {
    end_x = event.changedTouches[0].pageX;
    if (start_x > end_x) {
      next();
    } else {
      prev();
    }
  }
}

// 버튼 슬라이드
function btnSlide(cont, list) {
  let curPos = 0;
  let postion = 0;
  const ITEM_WIDTH = 590;

  const btnMove = cont.querySelectorAll(".btn-move button");

  btnMove[0].addEventListener("click", prev);
  btnMove[1].addEventListener("click", next);

  function prev() {
    if (curPos > 0) {
      postion += ITEM_WIDTH;
      list.style.transform = `translateX(${postion}px)`;
      curPos = curPos - 1;
    }
  }
  function next() {
    if (curPos < 3) {
      postion -= ITEM_WIDTH;
      list.style.transform = `translateX(${postion}px)`;
      curPos = curPos + 1;
    }
  }
}

// 포트폴리오 목록 슬라이드 0
// function itemSlide() {
//   const item = listItem.querySelectorAll("li");
//   const itemWidth = item[0].offsetWidth;
//   const btnMove = contPortfolio[0].querySelectorAll(".btn-move button");

//   btnMove[0].addEventListener("click", function () {
//     itemCount--;
//     if (itemCount < 0) {
//       itemCount = 0;
//     }
//     listItem.style.left = "-" + itemCount * itemWidth + "px";
//   });
//   btnMove[1].addEventListener("click", function () {
//     itemCount++;
//     if (itemCount > item.length - 1) {
//       itemCount = item.length - 1;
//     }
//     listItem.style.left = "-" + itemCount * itemWidth + "px";
//   });
// }

// function infoSlide() {
//   const contInfo = document.querySelectorAll(".cont");
//   const btnScroll = document.querySelectorAll(".btn.scroll-cont");
//   const btnNavMenu = document.querySelectorAll("#gnb .menu button");
//   let pageCount = 0;

//   console.log(btnScroll);

//   // 스크롤 올릴 때
//   function moveUp() {
//     pageCount--;
//     if (pageCount < 0) {
//       pageCount = 0;
//     }
//     switchPage();
//     listItem.style.left = "0px";
//     listItem1.style.left = "0px";
//     itemCount = 0;
//   }
//   // 스크롤 내릴 때
//   function moveDown() {
//     pageCount++;
//     if (pageCount > contInfo.length - 1) {
//       pageCount = contInfo.length - 1;
//     }
//     switchPage();
//     listItem.style.left = "0px";
//     listItem1.style.left = "0px";
//     itemCount = 0;
//   }
//   // 스크롤마다 클래스 추가/제거
//   function switchPage() {
//     for (let i = 0; i < contInfo.length; i++) {
//       if (pageCount !== i) {
//         contInfo[i].classList.remove("on");
//       } else if (pageCount === i) {
//         contInfo[i].classList.add("on");
//       }
//     }
//   }
//   // 터치로 슬라이드 작동
//   // document.addEventListener("touchmove", function (event) {
//   //   if (event.key === "ArrowUp") {
//   //     moveUp();
//   //   } else if (event.key === "ArrowDown") {
//   //     moveDown();
//   //   }
//   // });
//   // 키로 슬라이드 작동
//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowUp") {
//       moveUp();
//     } else if (event.key === "ArrowDown") {
//       moveDown();
//     }
//   });
//   // 휠로 슬라이드 작동
//   // document.addEventListener("wheel", function (event) {
//   //   if (event.deltaY < 0) {
//   //     moveUp();
//   //   } else {
//   //     moveDown();
//   //   }
//   // });

//   // document.addEventListener("touchstart", moveUp);
//   // document.addEventListener("touchend", moveDown);
//   // 버튼으로 슬라이드 작동
//   // btnScroll[0].addEventListener("click", function () {
//   //   moveUp();
//   //   console.log("up");
//   // });
//   // btnScroll[1].addEventListener("click", function () {
//   //   moveDown();
//   //   console.log("down");
//   // });

//   // 버튼으로 지정된 페이지 이동
//   for (let i = 0; i < btnNavMenu.length; i++) {
//     btnNavMenu[i].addEventListener("click", function () {
//       for (j = 0; j < contInfo.length; j++) {
//         if (i === j) {
//           contInfo[j].classList.add("on");
//         } else {
//           contInfo[j].classList.remove("on");
//         }
//       }
//     });
//   }
// }

function init() {
  btnSlide(contPortfolio[0], listItem);
  btnSlide(contPortfolio[1], listItem1);
  swipeSlide(listItem);
  swipeSlide(listItem1);
}
init();
