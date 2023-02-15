const listArea = document.querySelector(".list_area");
const listChild = document.querySelectorAll(".list_area > div");
function reLoad() {}

function listCreate() {}

function listReset() {
  listChild.forEach((element) => {
    element.style.display = "none";
  });
  list.forEach((element) => {
    let contain = document.createElement("div");
    contain.classList.add("item");
    let name = document.createElement("span");
    name.innerHTML = element.name;
    name.classList.add("name");
    let grade = document.createElement("span");
    grade.classList.add("grade");
    let inner = document.createElement("p");
    inner.innerHTML = element.grade;
    if (inner.innerHTML !== "UC") {
      inner.style.color = "#fff";
      grade.style.background = "#777";
    }
    grade.append(inner);
    // for (i = 0; i < element.grade.length; i++) {
    //   let inner = document.createElement("p");
    //   inner.innerHTML = element.grade[i];
    //   gradeColor(inner);
    //   grade.append(inner);
    // }
    let genre = document.createElement("span");
    genre.innerHTML = element.genre;
    genre.classList.add("genre");
    if (element.tag != null) {
      let tag = document.createElement("span");
      tag.innerHTML = element.tag;
      tag.classList.add("tag");
      contain.append(tag);
    }
    contain.appendChild(name);
    contain.appendChild(grade);
    contain.appendChild(genre);
    listArea.appendChild(contain);
  });
}

function sortList() {
  list.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  list.sort(function (a, b) {
    if (genreNum(a) > genreNum(b)) {
      return 1;
    } else if (genreNum(a) < genreNum(b)) {
      return -1;
    } else {
      return 0;
    }
  });
}
function filtList() {
  list.filter((ele) => {
    return arrFilter.includes(ele.genre);
  });
}

// 치환 함수
// 장르 => 숫자 치환
function genreNum(target) {
  switch (target.genre) {
    case "기동전사 건담":
      return 1;
    case "기동전사 건담 THE ORIGIN":
      return 1.1;
    case "기동전사 건담: MS IGLOO":
      return 1.2;
    case "기동전사 건담: 제MS08소대":
      return 1.3;
    case "기동전사 건담 0080: 주머니속의 전쟁":
      return 1.4;
    case "기동전사 건담 0083: 스타더스트 메모리":
      return 1.4;
    case "기동전사 Z건담":
      return 2;
    case "기동전사 건담ZZ":
      return 3;
    case "기동전사 건담: 역습의 샤아":
      return 4;
    case "기동전사 건담 F91":
      return 5;
    case "기동전사 건담 V건담":
      return 6;
    case "기동전사 건담 썬더볼트":
      return 7;
    case "기동무투전 G건담":
      return 11;
    case "신기동전기 건담W":
      return 12;
    case "기동신세기 건담X":
      return 13;
    case "기동전사 건담 SEED":
      return 14;
    case "기동전사 건담 SEED DESTINY":
      return 15;
    case "기동전사 건담 OO":
      return 16;
    case "기동전사 건담 AGE":
      return 17;
    case "기동전사 건담 철혈의 오펀스":
      return 18;
    case "기동전사 건담 수성의 마녀":
      return 19;
    case "∀ 건담":
      return 20;
    case "건담 G의 레콘기스타":
      return 21;
    case "건담 빌드 파이터즈":
      return 30;
    case "건담 빌드 파이터즈 트라이":
      return 30.1;
    case "건담 빌드 파이터즈 트라이 아일랜드 워즈":
      return 30.2;
    case "건담 빌드 파이터즈 배틀로그":
      return 30.3;
    case "건담 빌드 다이버즈":
      return 31;
    case "건담 빌드 다이버즈 Re:RISE":
      return 31.1;
    case "건담 빌드 다이버즈 배틀로그":
      return 31.2;
    case "SD건담 G제네레이션":
      return 32;
    case "SD건담 월드 히어로즈":
      return 33;
    case "SD건담 월드 삼국창걸전":
      return 33.1;
    default:
      return 99;
  }
}
// 등급 => 색상 치환
function gradeColor(target) {
  target.style.fontWeight = "600";
  switch (target.innerHTML) {
    case "HG":
      target.style.color = "#f90";
      break;
    case "RG":
      target.style.color = "#fd2";
      target.style.textShadow = " #000 1px 1px 2px";
      break;
    case "MG":
      target.style.color = "#092";
      break;
    case "PG":
      target.style.color = "#F23";
      break;
    default:
      target.style.color = "#000";
  }
}
