const contService = document.querySelector(".cont.service");
const contSocial = document.querySelector(".cont.social");

function mainSlide() {
  let slideCount = 0;

  function slideShow() {
    const slide = document.querySelectorAll(".slider .item");
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.opacity = "0"; //처음에 전부 display를 none으로 한다.
    }
    slideCount++;
    if (slideCount >= slide.length) {
      slideCount = 0; //인덱스가 초과되면 1로 변경
    }
    slide[slideCount].style.opacity = "1"; //해당 인덱스는 block으로
    setTimeout(slideShow, 5000); //함수를 4초마다 호출
  }
  window.onload = function () {
    slideShow();
  };
}

let listCount = 0;

function itemSlide(cont, width) {
  const ITEM_WIDTH = width;

  const btnPrev = cont.querySelector(".btn-move .prev");
  const btnNext = cont.querySelector(".btn-move .next");
  const itemList = cont.querySelectorAll(".list-item ul");

  btnPrev.addEventListener("click", function () {
    listCount--;
    for (let i = 0; i < itemList.length; i++) {
      if (listCount < 0) {
        listCount = 0;
      }
      itemList[i].style.transform = `translateX(-${listCount * ITEM_WIDTH}px)`;
    }
  });
  btnNext.addEventListener("click", function () {
    listCount++;
    for (let i = 0; i < itemList.length; i++) {
      if (listCount > itemList[i].querySelectorAll("li").length - 1) {
        listCount = itemList[i].querySelectorAll("li").length - 1;
      }
      itemList[i].style.transform = `translateX(-${listCount * ITEM_WIDTH}px)`;
    }
  });
}
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

function itemSelect(cont) {
  const itemSelector = cont.querySelectorAll(".tab-list li");
  const itemList = cont.querySelectorAll(".list-item ul");

  for (let i = 0; i < itemSelector.length; i++) {
    itemSelector[i].addEventListener("click", function () {
      for (j = 0; j < itemList.length; j++) {
        if (i === j) {
          listCount = 0;
          itemList[j].style.transform = `translateX(0px)`;
          itemList[j].classList.add("on");
          itemSelector[j].classList.add("on");
        } else {
          itemList[j].classList.remove("on");
          itemSelector[j].classList.remove("on");
        }
      }
    });
  }
}

// function fMenuAccordion() {
//   const footerTop = document.querySelector("footer .top");
//   const footerSubmenu = footerTop.querySelectorAll(".main-menu .sub-menu");

//   if (innerWidth < 768) {
//     for (i = 0; i < footerSubmenu.length; i++)
//       footerSubmenu[i].classList.add("active");
//   } else {
//     for (i = 0; i < footerSubmenu.length; i++)
//       footerSubmenu[i].classList.remove("active");
//   }
//   window.addEventListener("resize", function () {
//     if (innerWidth < 768) {
//       for (i = 0; i < footerSubmenu.length; i++)
//         footerSubmenu[i].classList.add("active");
//     } else {
//       for (i = 0; i < footerSubmenu.length; i++)
//         footerSubmenu[i].classList.remove("active");
//     }
//   });
// }

function init() {
  mainSlide();
  itemSlide(contService, 390);
  itemSlide(contSocial, 510);
  itemSelect(contService);
}
init();
