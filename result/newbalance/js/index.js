const navbar = document.querySelector(".navbar"),
        gnb = document.querySelector("#gnb"),
        gnbTarget = navbar.querySelectorAll("#gnb .target"),
        lnbWrap = navbar.querySelectorAll(".target .lnb-wrap"),
        bkBg = document.querySelector(".dimm_gnb");

function lnbView(){
    for(let i=0; i<gnbTarget.length; i++){
        gnbTarget[i].addEventListener("mouseover", function(){
            if(i==0){ lnbWrap[0].classList.add("active"); }
            if(i==1){ lnbWrap[1].classList.add("active"); }
            if(i==2){ lnbWrap[2].classList.add("active"); }
            if(i==3){ lnbWrap[3].classList.add("active"); }
        });
        gnbTarget[i].addEventListener("mouseout", function(){
            if(i==0){ lnbWrap[0].classList.remove("active"); }
            if(i==1){ lnbWrap[1].classList.remove("active"); }
            if(i==2){ lnbWrap[2].classList.remove("active"); }
            if(i==3){ lnbWrap[3].classList.remove("active"); }
        });
    }
}

function blackCover(){
    gnb.addEventListener("mouseover", function(){
        bkBg.classList.add("active");
    });
    gnb.addEventListener("mouseout", function(){
        bkBg.classList.remove("active");
    });
}

function scrollEvent(){
    const themeItem = document.querySelectorAll(".theme .item"),
        seriesItem = document.querySelectorAll(".series .item"),
        liveFitItem = document.querySelectorAll(".live-fit .item");

    window.onscroll = function() {
        for(let i=0; i<themeItem.length; i++){
            if(window.scrollY > 700 && i==0){
                themeItem[i].querySelector(".txt").classList.add("active");
                themeItem[i].querySelector(".img").classList.add("active");
            } else if(window.scrollY > 1000 && i==1){
                themeItem[i].querySelector(".txt").classList.add("active");
                themeItem[i].querySelector(".img").classList.add("active");
            } else{
                themeItem[i].querySelector(".txt").classList.remove("active");
                themeItem[i].querySelector(".img").classList.remove("active");
            }
        }

        for(let i=0; i<seriesItem.length; i++){
            if(window.scrollY > 1900)
            seriesItem[i].classList.add("active");
            else
            seriesItem[i].classList.remove("active");
        }

        for(let i=0; i<liveFitItem.length; i++){
            if(window.scrollY > 3300 && i==0)
                liveFitItem[i].classList.add("active");
            else if(window.scrollY > 3300 && i==1)
                liveFitItem[i].classList.add("active");
            else
                liveFitItem[i].classList.remove("active");
        }
    }
}

function init(){
    lnbView();
    blackCover();
    scrollEvent();
}

init();






