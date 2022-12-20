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

function itemSlide(target) {
  const btnPrev = target.querySelector(".btn-slide.prev");
  const btnNext = target.querySelector(".btn-slide.next");
  const itemList = target.querySelectorAll(".list-item ul");

  const itemWidth = itemList[0].querySelector("li").offsetWidth;

  btnPrev.addEventListener("click", function () {
    listCount--;
    for (let i = 0; i < itemList.length; i++) {
      if (listCount < 0) {
        listCount = 0;
      }
      itemList[i].style.left = "-" + listCount * itemWidth + "px";
    }
  });
  btnNext.addEventListener("click", function () {
    listCount++;
    for (let i = 0; i < itemList.length; i++) {
      if (listCount > itemList[i].querySelectorAll("li").length - 1) {
        listCount = itemList[i].querySelectorAll("li").length - 1;
      }
      itemList[i].style.left = "-" + listCount * itemWidth + "px";
    }
  });
}

function itemSelect(target) {
  const itemSelector = target.querySelectorAll(".tab-list li");
  const itemList = target.querySelectorAll(".list-item ul");

  for (let i = 0; i < itemSelector.length; i++) {
    itemSelector[i].addEventListener("click", function () {
      for (j = 0; j < itemList.length; j++) {
        if (i === j) {
          listCount = 0;
          itemList[j].style.left = "0px";
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
  itemSlide(contService);
  itemSlide(contSocial);
  itemSelect(contService);
}
init();
