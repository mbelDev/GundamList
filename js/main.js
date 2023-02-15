const search = document.querySelector(".search-btn");
const items = document.querySelectorAll(".item");

const menu = document.querySelector(".menu-btn");
const menuWnd = document.querySelector(".header__menu");
const menuMain = document.querySelectorAll(".menu-main > p");
const menuSub = document.querySelectorAll(".menu-sub > p");
const menuSubSub = document.querySelectorAll(".menu-sub-sub > p");
const btnSelect = document.querySelectorAll(".menu-main span");

let arrFilter = [];

let menuHeight = 0;
let openMenu = 0;

menu.addEventListener("click", function () {
  if (!menu.classList.contains("open")) {
    return open();
  } else {
    return reset();
  }
});
// 각 메뉴 버튼에 이벤트 할당
menuSub.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.toggle("open");
    openSmooth(element);
  });
});
menuSubSub.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (element.classList.contains("open")) {
      //모든 서브를 닫는다.
      resetSub();
      resetHeight();
    } else {
      resetSub();
      resetHeight();
      element.classList.add("open");
    }
    // 그리고 타겟 서브를 연다.
    openSmooth(element, true);
    // element.parentElement;
  });
  /*

    급해서 대충 만들었으니까 나중에 좀 더 다듬을 것.
    = 리셋 서브, 리셋 하이트, 서브 열고닫는 부분....
    //이상적인 동작//
    모든 서브를 닫고 선택된 서브만 열기.
    열린 서브를 선택하면 모든 서브를 닫는다.
    닫힌 서브를 선택하면 선택 서브만 열고 나머지를 다 닫는다.
    =>모두 닫고 선택만 열거나
    =>선택 서브 외의 모든 서브를 닫거나.

  */
});
// 각 필터 버튼에 이벤트 할당
btnSelect.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    console.log(e.target.classList);
    target = e.target.classList;
    target.toggle("selected");
    let target_sub = parent.getElementByClassName("selected");
    target_sub.forEach((ele) => {
      ele.classList.add("selected");
    });
  });
});

function open() {
  menu.classList.add("open");
  menuWnd.classList.add("open");
  console.log("open");
}

function reset() {
  console.log("reset");
  menu.classList.remove("open");
  menuWnd.classList.remove("open");
  menuSub.forEach((element, index) => {
    element.classList.remove("open");
    element.classList.remove("subOpen");
  });
  menuSubSub.forEach((element, index) => {
    element.classList.remove("open");
  });
  resetSub();
  resetMain();
  if (openMenu) {
    menuWnd.style = "transition-delay: 300ms;";
  } else {
    menuWnd.style = "transition-delay: 0";
  }

  /*
  모두닫기
  let closeAll = document.querySelectorAll(".menu-main ul");
  closeAll.forEach((element) => {
    element.style = "height:0px;";
  });
  */
  openMenu = 0;
}

function resetSub() {
  let target = document.querySelectorAll(".menu-sub-sub > ul");
  target.forEach((element) => {
    element.style = "height:0px";
    element.previousSibling.previousSibling.classList.remove("open");
  });
}
function resetMain() {
  let target = document.querySelectorAll(".menu-sub > ul");
  target.forEach((element) => {
    element.style = "height:0px";
  });
}
function resetHeight() {
  menuSub.forEach((element) => {
    let target = element.nextSibling.nextSibling;
    if (element.classList.contains("open")) {
      let height = target.children.length;
      target.style = `height:${height * 40}px`;
      element.classList.remove("subOpen");
    } else {
      target.style = `height:0px`;
    }
  });
  menuSubSub.forEach((element, index) => {
    element.classList.remove("open");
  });
}

function openSmooth(target, sub = false) {
  let cont = target.nextSibling.nextSibling;
  menuHeight = 0;
  if (target.classList.contains("open")) {
    openMenu++;
    let height = cont.children.length;
    cont.style = `height:${height * 40}px;`;
    /*
    filter 윈도우 높이를 결정하는 부분.
    flex-wrap상태라서 기기에 따라 한 줄일수도 두 줄일수도 있는데 높이를 어떻게 계산한담?
    if (cont.classList.contains("filter")) {
      cont.style.height = "auto";
    }
    */
    if (sub == true) {
      // 서브메뉴의 서브에서 호출한 경우
      let part = target.parentElement.parentElement;
      menuHeight = height + part.children.length;
      part.style = `height:${menuHeight * 40}px`;
      part.previousSibling.previousSibling.classList.add("subOpen");
    }
    console.log(menuHeight);
  } else {
    openMenu--;
    cont.style = `height:0px;`;
    if (sub == true) {
      let part = target.parentElement.parentElement;
      menuHeight = part.children.length;
      part.style = `height:${menuHeight * 40}px`;
      part.previousSibling.previousSibling.classList.remove("subOpen");
    } else if (target.classList.contains("subOpen")) {
      target.classList.remove("subOpen");
      resetSub();
    }
  }
}

// ---------------------------------------------------- //

// 검색창
search = document.addEventListener("keyup", (e) => {
  const items = document.querySelectorAll(".item");
  const serchFilter = e.target.value.toUpperCase().trim();
  items.forEach((item) => {
    if (item.textContent.toUpperCase().includes(serchFilter)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

// ---------------------------------------------------- //

// 필터 관리 함수들

function filterReset() {
  let btns = document.querySelectorAll(".menu-main li p");
  arrFilter = [];
  btns.forEach((ele) => {
    if (ele.classList.contains("selected")) {
      arrFilter.push(ele.textContent);
    }
  });
}
