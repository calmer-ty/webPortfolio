const contPortfolio = document.querySelectorAll(".cont.portfolio");
const contType1 = document.querySelector(".cont.type1");
const contType2 = document.querySelector(".cont.type2");
const listItem = contPortfolio[0].querySelector(".list-item ul");

let itemCount = 0;

function infoSlide() {
  const contInfo = document.querySelectorAll(".cont");
  const btnScroll = document.querySelector(".btn.scroll-show");
  const btnNavMenu = document.querySelectorAll("#gnb .menu button");
  let pageCount = 0;

  // 스크롤 올릴 때
  function moveUp() {
    pageCount--;
    if (pageCount < 0) {
      pageCount = 0;
    }
    switchPage();
    listItem.style.left = "0px";
    itemCount = 0;
  }
  // 스크롤 내릴 때
  function moveDown() {
    pageCount++;
    if (pageCount > contInfo.length - 1) {
      pageCount = contInfo.length - 1;
    }
    switchPage();
    listItem.style.left = "0px";
    itemCount = 0;
  }
  // 스크롤마다 클래스 추가/제거
  function switchPage() {
    for (let i = 0; i < contInfo.length; i++) {
      if (pageCount !== i) {
        contInfo[i].classList.remove("on");
      } else if (pageCount === i) {
        contInfo[i].classList.add("on");
      }
    }
  }

  // 키로 슬라이드 작동
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      moveUp();
    } else if (event.key === "ArrowDown") {
      moveDown();
    }
  });
  // 휠로 슬라이드 작동
  document.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
      moveUp();
    } else {
      moveDown();
    }
  });
  // 버튼으로 슬라이드 작동
  btnScroll.addEventListener("click", function () {
    moveDown();
  });
  // 버튼으로 지정된 페이지 이동
  for (let i = 0; i < btnNavMenu.length; i++) {
    btnNavMenu[i].addEventListener("click", function () {
      for (j = 0; j < contInfo.length; j++) {
        if (i === j) {
          contInfo[j].classList.add("on");
        } else {
          contInfo[j].classList.remove("on");
        }
      }
    });
  }
}

function itemSlide() {
  const item = listItem.querySelectorAll("li");
  const itemWidth = item[0].offsetWidth;
  const btnMove = contPortfolio[0].querySelectorAll(".btn-move button");

  function calculationSlide() {
    listItem.style.left = "-" + itemCount * itemWidth + "px";
  }

  btnMove[0].addEventListener("click", function () {
    itemCount--;
    if (itemCount < 0) {
      itemCount = 0;
    }
    calculationSlide();
  });
  btnMove[1].addEventListener("click", function () {
    itemCount++;
    if (itemCount > item.length - 1) {
      itemCount = item.length - 1;
    }
    calculationSlide();
  });
}

// window.addEventListener("resize", function () {
//   itemSlide();
// });
function init() {
  infoSlide();
  itemSlide();
}
init();
