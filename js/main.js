const search = document.querySelector(".search-btn");
const searchField = document.querySelector(".search");
const items = document.querySelectorAll(".item");

const notice = document.querySelector(".notice-btn");
const menu = document.querySelector(".menu-btn");
const menuWnd = document.querySelector(".header__menu");
const menuMain = document.querySelectorAll(".menu-main > p");
const menuSub = document.querySelectorAll(".menu-sub > p");
const menuSubSub = document.querySelectorAll(".menu-sub-sub > p");
const btnSelect = document.querySelectorAll(".menu-main span");

let arrFilter = [];
let arrItems = [];

let menuHeight = 0;
let openMenu = 0;

notice.addEventListener("clcick",function() {
  console.log("nothing");
});
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
    if (element.classList.contains("open")) {
      resetMain();
      resetSub();
      resetHeight();
    }else{
      resetMain();
      resetSub();
      resetHeight();
      element.classList.toggle("open");
    }
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

// ================ 각 필터 버튼에 이벤트 할당 =================== //

btnSelect.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(e.target.classList);
    btn = e.target.classList;
    btn.toggle("selected");

    if (btn.contains("selected")) {
      filterCheck(e.target, "true");
    } else {
      filterCheck(e.target, "false");
    }
  });
});

// ======================  필터 이벤트  ======================== //
function open() {
  menu.classList.add("open");
  menuWnd.classList.add("open");
  // console.log("open");
}

function reset() {
  // console.log("reset");
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
    element.previousSibling.previousSibling.classList.remove("open");
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
    // console.log(menuHeight);
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
  serchRun();
});

// ---------------------------------------------------- //

// 필터 관리 함수들

function filterCheck(_target, _on) {
  // console.log(_target);
  //_target = 이벤트 대상. ul // _on 선택인지 선택 해제인지.
  if (_target.parentElement.children.length > 2) {
    target = _target.parentElement.children[2]; // span버튼을 클릭하면 부모인 li에서 하위 ul을 찾아낸다
    if (target.children.length > 0) {
      // 그 ul이 자식 li를 가지고있는지 체크
      for (i = 0; i < target.childElementCount; i++) {
        if (_on == "true") {
          target.children[i].children[0].classList.add("selected");
        } else if (_on == "false") {
          target.children[i].children[0].classList.remove("selected");
        }
        // console.log(target.children[i].children.length);
        if (target.children[i].children.length > 2) {
          filterSub(target.children[i].children[2], _on);
        }
      }
      // for (i = 0; i < target.children.length - 1; i++) {
      //   if (_on == "true") {
      //     filterCheck(target.children[i].children[0], "true");
      //   } else if (_on == "false") {
      //     filterCheck(target.children[i].children[0], "false");
      //   }
      //   console.log(target.children.length);
      // }
      // ===== 첫 번째 서브에만 적용되고 두 번째부터 적용이 안 됨 ===== //
      // ===== 지역변수 i를 공유하고 있어서 그랬음. 별도의 함수로 빼서 ===== //
      // ===== for문의 임시변수를 j로 변경해서 적용시킴 ===== //
    }
  }
  filterReflesh(); // 체크된 필터의 부모, 자식 체크(casecade)
  filterReset(); // 필터에 체크된 장르만 모아서 출력
  serchRun(); // 정리된 목록내부에서 검색어에 해당되는 목록만 재출력
}
function filterSub(_target, _on) {
  // console.log(_target);
  //_target = 이벤트 대상. ul // _on 선택인지 선택 해제인지.
  if (_target.children.length > 0) {
    for (j = 0; j < _target.children.length; j++) {
      if (_on == "true") {
        _target.children[j].children[0].classList.add("selected");
      } else {
        _target.children[j].children[0].classList.remove("selected");
      }
    }
  }
}

function filterReset() {
  let btns = document.querySelectorAll(".menu-main li span");
  arrFilter = [];
  btns.forEach((ele) => {
    if (ele.classList.contains("selected")) {
      arrFilter.push(ele.parentElement.children[1].textContent);
    }
  });

  arrItems = document.querySelectorAll(".item");
  arrItems.forEach((item) => {
    item.style.display = "none";
    item.classList.remove("filted");
    arrFilter.forEach((filter)=>{
      let filterText = filter.toUpperCase();
      if( item.textContent.toUpperCase().includes(filterText) ){
        item.style.display = "flex";
        item.classList.add("filted");
      }
    })
  });
  //작업중
}

function filterReflesh() {
  let allTargets = document.querySelectorAll(".menu li")
  let targets = [];
  allTargets.forEach((hasChildUl)=>{
      if(hasChildUl.children[2] != null){
        targets.push(hasChildUl);
        }
      })
  targets.forEach((ele)=>{
    if (ele.children[2].children.length>0){
      let target = ele.children[2];
      let selectChecker = target.children.length;
      for(i=0 ; i<target.children.length ; i++){
        if (target.children[i].children[0].classList.contains("selected")){
          selectChecker--;
          // console.log(target.children[i],target.children[i].children[0]);
        }
      }
      if ( selectChecker > 0 ){
        ele.children[0].classList.remove("selected");
      }else{ 
        ele.children[0].classList.add("selected");
      }
      // console.log(selectChecker+"/"+target.children.length+"("+target.children.length+")");
    }
  })
  // console.log(allTargets);
  // console.log(targets);
  // 역순으로 해야함. 자식부터 체크해서 위로 올라가야한다. 03.03
  // 자식이 한 개라도 체크 되어있으면 부모도 체크되게 바꾸자. 대신 꽉 찬게 아니면 회색으로??? selected 외에 하나가 추가되어야???
}

function filterStarter(){
  let allSpans = document.querySelectorAll(".menu span")
  console.log(allSpans);
  allSpans.forEach((span)=>{
    span.classList.add("selected");
  })
  filterReset();
}

function serchRun(){
  serchFilter = document.querySelector(".search").value.toUpperCase().trim()
  const items = arrItems;
  items.forEach((item) => {
    if (item.textContent.toUpperCase().includes(serchFilter) && item.classList.contains("filted")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}