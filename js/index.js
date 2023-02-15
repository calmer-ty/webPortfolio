const contPortfolio = document.querySelector(".cont.portfolio");
const listItem = contPortfolio.querySelector(".list-item ul");

let itemCount = 0;

function infoSlide() {
  const infoContainer = document.querySelectorAll(".cont");
  const btnScroll = document.querySelector(".btn.scroll-show");
  const btnNavMenu = document.querySelectorAll("#gnb button");
  let pageCount = 0;

  function pageSwitch() {
    for (let i = 0; i < infoContainer.length; i++) {
      if (pageCount !== i) {
        infoContainer[i].classList.remove("on");
      } else if (pageCount === i) {
        infoContainer[i].classList.add("on");
      }
    }
  }
  function moveUp() {
    pageCount--;
    if (pageCount < 0) {
      pageCount = 0;
    }
    pageSwitch();
    listItem.style.left = "0px";
    itemCount = 0;
  }
  function moveDown() {
    pageCount++;
    if (pageCount > infoContainer.length - 1) {
      pageCount = infoContainer.length - 1;
    }
    pageSwitch();
    listItem.style.left = "0px";
    itemCount = 0;
  }

  // 키로 슬라이드 작동
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      moveUp();
    } else if (event.key === "ArrowDown") {
      moveDown();
    }
  });
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
      for (j = 0; j < infoContainer.length; j++) {
        if (i === j) {
          infoContainer[j].classList.add("on");
        } else {
          infoContainer[j].classList.remove("on");
        }
      }
    });
  }
}

function itemSlide() {
  const btnMove = contPortfolio.querySelectorAll(".btn-move button");
  const item = listItem.querySelectorAll("li");
  const itemWidth = item[0].offsetWidth;

  btnMove[0].addEventListener("click", function () {
    itemCount--;
    if (itemCount < 0) {
      itemCount = 0;
    }
    listItem.style.left = "-" + itemCount * itemWidth + "px";
  });
  btnMove[1].addEventListener("click", function () {
    itemCount++;
    if (itemCount > item.length - 1) {
      itemCount = item.length - 1;
    }
    listItem.style.left = "-" + itemCount * itemWidth + "px";
  });
}

function init() {
  infoSlide();
  itemSlide();
}
init();
