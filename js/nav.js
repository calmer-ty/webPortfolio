function navTransform() {
  const header = document.querySelector("#header");
  const btnOpen = header.querySelector(".btn-lnb .open");
  const btnClose = header.querySelector(".btn-lnb .close");

  btnOpen.addEventListener("click", function () {
    header.classList.add("lnb-type");
  });
  btnClose.addEventListener("click", function () {
    header.classList.remove("lnb-type");
  });
}

function init() {
  navTransform();
}
init();
