function mainSlide() {
  // const firstSlide = document.querySelector(".slider .item:first-child");
  // const currentSlide = document.querySelector(".slider .item.active");

  // if (currentSlide) {
  // 	currentSlide.classList.remove("active");
  // 	const nextSlide = currentSlide.nextElementSibling;

  // 	if (nextSlide)
  // 		nextSlide.classList.add("active");
  // 	else
  // 		firstSlide.classList.add("active");
  // } else
  // 	firstSlide.classList.add("active");

  // setInterval(mainSlide, 4000);

  let index = 0; //이미지에 접근하는 인덱스
  window.onload = function () {
    slideShow();
  };

  function slideShow() {
    // var x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 참조
    const x = document.querySelectorAll(".slider .item"); //slide1에 대한 dom 참조
    for (let i = 0; i < x.length; i++) {
      // x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
      x[i].style.opacity = "0"; //처음에 전부 display를 none으로 한다.
    }
    index++;
    if (index > x.length) {
      index = 1; //인덱스가 초과되면 1로 변경
    }
    // x[index-1].style.display = "block";  //해당 인덱스는 block으로
    x[index - 1].style.opacity = "1"; //해당 인덱스는 block으로
    setTimeout(slideShow, 5000); //함수를 4초마다 호출
  }
}

// const carouselBtnGroup = document.querySelectorAll(".btn-group.carousel");
const carouselBtn_0 = document.querySelectorAll(
  "section.service .btn-group.carousel .btn"
);
const carouselItemLi_0 = document.querySelectorAll(
  "section.service .item.carousel li"
);
let carouselBtnCnt_0 = 0;

const carouselBtn_1 = document.querySelectorAll(
  "section.social .btn-group.carousel .btn"
);
const carouselItemLi_1 = document.querySelectorAll(
  "section.social .item.carousel li"
);
let carouselBtnCnt_1 = 0;

function carouselRight_0(a, b, c, d, e, f, limit) {
  carouselBtn_0[1].onclick = function () {
    carouselBtnCnt_0++;
    for (let i of carouselItemLi_0) {
      if (carouselBtnCnt_0 == 0) {
        i.style.left = "-" + a + "px";
      }
      if (carouselBtnCnt_0 == 1) {
        i.style.left = "-" + b + "px";
      }
      if (carouselBtnCnt_0 == 2) {
        i.style.left = "-" + c + "px";
      }
      if (carouselBtnCnt_0 == 3) {
        i.style.left = "-" + d + "px";
      }
      if (carouselBtnCnt_0 == 4) {
        i.style.left = "-" + e + "px";
      }
      if (carouselBtnCnt_0 == 5) {
        i.style.left = "-" + f + "px";
      }
      if (carouselBtnCnt_0 > limit) {
        carouselBtnCnt_0 = limit;
      }
    }
  };
}
function carouselRight_1(a, b, c, d, e, f, limit) {
  carouselBtn_1[1].onclick = function () {
    carouselBtnCnt_1++;
    for (let i of carouselItemLi_1) {
      if (carouselBtnCnt_1 == 0) {
        i.style.left = "-" + a + "px";
      }
      if (carouselBtnCnt_1 == 1) {
        i.style.left = "-" + b + "px";
      }
      if (carouselBtnCnt_1 == 2) {
        i.style.left = "-" + c + "px";
      }
      if (carouselBtnCnt_1 == 3) {
        i.style.left = "-" + d + "px";
      }
      if (carouselBtnCnt_1 == 4) {
        i.style.left = "-" + e + "px";
      }
      if (carouselBtnCnt_1 == 5) {
        i.style.left = "-" + f + "px";
      }
      if (carouselBtnCnt_1 > limit) {
        carouselBtnCnt_1 = limit;
      }
    }
  };
}

function carouselLeft_0(a, b, c, d, e, f, limit) {
  carouselBtn_0[0].onclick = function () {
    carouselBtnCnt_0--;
    for (let i of carouselItemLi_0) {
      if (carouselBtnCnt_0 == 0) {
        i.style.left = "-" + a + "px";
      }
      if (carouselBtnCnt_0 == 1) {
        i.style.left = "-" + b + "px";
      }
      if (carouselBtnCnt_0 == 2) {
        i.style.left = "-" + c + "px";
      }
      if (carouselBtnCnt_0 == 3) {
        i.style.left = "-" + d + "px";
      }
      if (carouselBtnCnt_0 == 4) {
        i.style.left = "-" + e + "px";
      }
      if (carouselBtnCnt_0 == 5) {
        i.style.left = "-" + f + "px";
      }
      if (carouselBtnCnt_0 < limit) {
        carouselBtnCnt_0 = limit;
      }
    }
  };
}
function carouselLeft_1(a, b, c, d, e, f, limit) {
  carouselBtn_1[0].onclick = function () {
    carouselBtnCnt_1--;
    for (let i of carouselItemLi_1) {
      if (carouselBtnCnt_1 == 0) {
        i.style.left = "-" + a + "px";
      }
      if (carouselBtnCnt_1 == 1) {
        i.style.left = "-" + b + "px";
      }
      if (carouselBtnCnt_1 == 2) {
        i.style.left = "-" + c + "px";
      }
      if (carouselBtnCnt_1 == 3) {
        i.style.left = "-" + d + "px";
      }
      if (carouselBtnCnt_1 == 4) {
        i.style.left = "-" + e + "px";
      }
      if (carouselBtnCnt_1 == 5) {
        i.style.left = "-" + f + "px";
      }
      if (carouselBtnCnt_1 < limit) {
        carouselBtnCnt_1 = limit;
      }
    }
  };
}

function carouselTotal() {
  if (innerWidth > 1400) {
    carouselRight_0(0, 330, 660, 990, null, null, 3);
    carouselLeft_0(0, 330, 660, 990, null, null, 0);
  } else if (innerWidth > 980) {
    carouselRight_0(0, 330, 660, 990, 1320, null, 4);
    carouselLeft_0(0, 330, 660, 990, 1320, null, 0);
  } else {
    carouselRight_0(0, 330, 660, 990, 1320, 1650, 5);
    carouselLeft_0(0, 330, 660, 990, 1320, 1650, 0);
  }

  if (innerWidth < 768) {
    carouselRight_1(0, 330, 660, 990, 1320, 1650, 5);
    carouselLeft_1(0, 330, 660, 990, 1320, 1650, 0);
  } else {
    carouselRight_1(0, 480, 960, 1440, 1920, null, 4);
    carouselLeft_1(0, 480, 960, 1440, 1920, null, 0);
  }

  window.addEventListener("resize", function () {
    if (innerWidth > 1400) {
      carouselRight_0(0, 330, 660, 990, null, null, 3);
      carouselLeft_0(0, 330, 660, 990, null, null, 0);
    } else if (innerWidth > 980) {
      carouselRight_0(0, 330, 660, 990, 1320, null, 4);
      carouselLeft_0(0, 330, 660, 990, 1320, null, 0);
    } else {
      carouselRight_0(0, 330, 660, 990, 1320, 1650, 5);
      carouselLeft_0(0, 330, 660, 990, 1320, 1650, 0);
    }

    if (innerWidth < 768) {
      carouselRight_1(0, 330, 660, 990, 1320, 1650, 5);
      carouselLeft_1(0, 330, 660, 990, 1320, 1650, 0);
    } else {
      carouselRight_1(0, 480, 960, 1440, 1920, null, 4);
      carouselLeft_1(0, 480, 960, 1440, 1920, null, 0);
    }
  });
}

function tabSelector() {
  const serviceCont = document.querySelector("section.service .cont");
  const serviceTabLi = serviceCont.querySelectorAll(".tab li");
  const serviceTabItembox = serviceCont.querySelector(".item-box");

  for (let i = 0; i < serviceTabLi.length; i++) {
    // 탭 li 클릭할때마다 함수
    serviceTabLi[i].onclick = function () {
      serviceTabItembox.querySelector(".active").classList.remove("active");
      // 탭을 누르면 클릭했던 아이템박스 액티브 초기화
      serviceTabItembox.querySelectorAll(".item")[i].classList.add("active");
      // 선택된 아이템 박스 액티브
      styleSec_btnCnt = 0;
      // 마지막으로 카운터는 0으로 마춰준다

      for (let i of serviceTabLi) //j
        if (carouselBtnCnt_0 == 0) {
          i.style.left = "0px";
        }
      // 0으로 마추어지면 슬라이드가 초기화 된다
    };
  }

  for (let i = 0; i < serviceTabLi.length; i++) {
    serviceTabLi[i].addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
}

function fMenuAccordion() {
  const footerTop = document.querySelector("footer .top");
  const footerSubmenu = footerTop.querySelectorAll(".main-menu .sub-menu");

  if (innerWidth < 768) {
    for (i = 0; i < footerSubmenu.length; i++)
      footerSubmenu[i].classList.add("active");
  } else {
    for (i = 0; i < footerSubmenu.length; i++)
      footerSubmenu[i].classList.remove("active");
  }
  window.addEventListener("resize", function () {
    if (innerWidth < 768) {
      for (i = 0; i < footerSubmenu.length; i++)
        footerSubmenu[i].classList.add("active");
    } else {
      for (i = 0; i < footerSubmenu.length; i++)
        footerSubmenu[i].classList.remove("active");
    }
  });
}

function init() {
  mainSlide();
  carouselTotal();
  tabSelector();
}
init();
