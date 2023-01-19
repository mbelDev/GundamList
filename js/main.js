const search = document.querySelector(".search-btn");
const menu = document.querySelector(".menu-btn");
const menuWnd = document.querySelector(".header__menu");
const menuMain = document.querySelectorAll(".menu-main > p");
const menuSub = document.querySelectorAll(".menu-sub > p");
const menuSubSub = document.querySelectorAll(".menu-sub-sub > p");
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
    element.classList.toggle("open");
    resetSub();
    openSmooth(element, true);
    element.parentElement;
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
  });
}
function resetMain() {
  let target = document.querySelectorAll(".menu-sub > ul");
  target.forEach((element) => {
    element.style = "height:0px";
  });
}

function openSmooth(target, sub = false) {
  let cont = target.nextSibling.nextSibling;
  menuHeight = 0;
  if (target.classList.contains("open")) {
    openMenu++;
    let height = cont.children.length;
    cont.style = `height:${height * 40}px;`;
    if (sub == true) {
      let part = target.parentElement.parentElement;
      menuHeight = height + part.children.length;
      part.style = `height:${menuHeight * 40}px`;
    }
    console.log(menuHeight);
  } else {
    openMenu--;
    cont.style = `height:0px;`;
    if (sub == true) {
      let part = target.parentElement.parentElement;
      menuHeight = part.children.length;
      part.style = `height:${menuHeight * 40}px`;
    } else {
      resetSub();
    }
  }
}
