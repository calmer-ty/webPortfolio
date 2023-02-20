function navTransform() {
  const header = document.querySelector("#header");
  const lnbOpen = header.querySelector(".btn-lnb .open");
  const lnbClose = header.querySelector(".btn-lnb .close");
  const btnNavMenu = document.querySelectorAll("#gnb .menu a");

  // lnb 열림
  lnbOpen.addEventListener("click", function () {
    header.classList.add("lnb-type");
  });
  // lnb 닫힘
  lnbClose.addEventListener("click", function () {
    header.classList.remove("lnb-type");
  });

  // 메뉴 선택 시 lnb 창이 닫힘
  for (i = 0; i < btnNavMenu.length; i++) {
    btnNavMenu[i].addEventListener("click", function () {
      header.classList.remove("lnb-type");
    });
  }
}

function init() {
  navTransform();
}
init();
