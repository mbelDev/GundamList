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
    for (i = 0; i < element.grade.length; i++) {
      let inner = document.createElement("p");
      inner.innerHTML = element.grade[i];
      gradeColor(inner);
      grade.append(inner);
    }
    let genre = document.createElement("span");
    genre.innerHTML = element.genre;
    genre.classList.add("genre");
    contain.appendChild(name);
    contain.appendChild(grade);
    contain.appendChild(genre);
    listArea.appendChild(contain);
  });
}

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

let list = [
  {
    name: "건담",
    genre: "기동전사 건담",
    grade: ["HG", "RG", "MG", "PG", "MS"],
  },
  {
    name: "건캐논",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "건탱크",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "G 파이터",
    genre: "기동전사 건담",
    grade: ["MG"],
  },
  {
    name: "볼",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "볼 샤크마우스 버전",
    genre: "기동전사 건담: MS IGLOO",
    grade: ["MG"],
  },
  {
    name: "볼 제08소대 ver.",
    genre: "기동전사 건담: 제MS08소대",
    grade: ["MG"],
  },
  {
    name: "볼 ver.ka",
    genre: "기동전사 건담",
    grade: ["MG"],
  },
  {
    name: "짐",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "육전형 짐",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "자쿠 I (구형 자쿠)",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "자쿠 I 스나이퍼 타입",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "람바 랄 전용 자쿠 I (구형 자쿠)",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "검은삼연성 전용 자쿠 I (구형 자쿠)",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "주다 (즈다)",
    genre: "기동전사 건담: MS IGLOO",
    grade: ["HG"],
  },
  {
    name: "자쿠 II",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "자쿠 II F2",
    genre: "기동전사 건담 0083: 스타더스트 메모리",
    grade: ["HG", "MG"],
  },
  {
    name: "샤아 전용 자쿠 II",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "검은삼연성 전용 자쿠 II",
    genre: "기동전사 건담",
    grade: ["HG", "RG", "MG"],
  },
  {
    name: "가르마 자비 전용 자쿠 II",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "신 마츠나가 전용 자쿠 II",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "구프",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "구프 커스텀",
    genre: "기동전사 건담: 제MS08소대",
    grade: ["HG", "MG"],
  },
  {
    name: "앗가이",
    genre: "기동전사 건담",
    grade: ["SD", "HG", "MG"],
  },
  {
    name: "즈고크",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "샤아 전용 즈고크",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "곡그",
    genre: "기동전사 건담",
    grade: ["SD", "HG"],
  },
  {
    name: "족그",
    genre: "기동전사 건담",
    grade: ["SD", "HG"],
  },
  {
    name: "걍",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "돔",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "겔구그",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "샤아 전용 겔구그",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "조니 라이덴 전용 겔구그",
    genre: "기동전사 건담",
    grade: ["HG", "MG"],
  },
  {
    name: "지옹",
    genre: "기동전사 건담",
    grade: ["HG", "RG", "MG"],
  },
  {
    name: "블루 데스티니 1호기",
    genre: "기동전사 건담",
    grade: ["SD", "HG"],
  },
  {
    name: "블루 데스티니 2호기",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "블루 데스티니 3호기",
    genre: "기동전사 건담",
    grade: ["SD", "HG"],
  },
  {
    name: "풀 아머 건담",
    genre: "기동전사 건담",
    grade: ["MG"],
  },
  {
    name: "건담 트리스탄",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "퍼펙트 건담",
    genre: "기동전사 건담",
    grade: ["MG"],
  },
  {
    name: "G-3 건담",
    genre: "기동전사 건담",
    grade: ["MG"],
  },
  {
    name: "건담 4호기",
    genre: "기동전사 건담",
    grade: ["MG"],
  },
  {
    name: "건담 5호기",
    genre: "기동전사 건담",
    grade: ["MG"],
  },
  {
    name: "풀 아머 건담 7호기",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "하이곡그",
    genre: "기동전사 건담 0080: 주머니속의 전쟁",
    grade: ["HG"],
  },
  {
    name: "뉴 건담",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG", "RG", "MG"],
  },
  {
    name: "뉴 건담 HWS(헤비 웨폰 시스템)",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["HG"],
  },
  {
    name: "하이뉴 건담",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["RG", "HG", "MG"],
  },
  {
    name: "사자비",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG", "MG"],
  },
  {
    name: "나이팅게일",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG"],
  },
  {
    name: "제간",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG", "MG"],
  },
  {
    name: "리가지 (리 가지)",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG"],
  },
  {
    name: "기라 도가",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG", "MG"],
  },
  {
    name: "레즌 전용 기라 도가",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG"],
  },
  {
    name: "퀘스 전용 야크트 도가",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG"],
  },
  {
    name: "규네이 전용 야크트 도가",
    genre: "기동전사 건담: 역습의 샤아",
    grade: ["SD", "HG"],
  },
  {
    name: "크시 (크사이) 건담",
    genre: "기동전사 건담: 섬광의 하사웨이",
    grade: ["SD", "HG"],
  },
  {
    name: "페넬로페",
    genre: "기동전사 건담: 섬광의 하사웨이",
    grade: ["HG"],
  },
  {
    name: "멧사 타입-F01",
    genre: "기동전사 건담: 섬광의 하사웨이",
    grade: ["HG"],
  },
  {
    name: "베귀르판테",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "건담 파렉트",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "건담 슈바르제테",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "수성의 마녀 신상품 B(임시)",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "데미 바딩",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "하인드리 슈투름",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "딜란자 솔",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "조워트 헤비",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "다릴 바르데",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "하인드리",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "틱발랑",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "조워트",
    genre: "기동전사 건담 수성의 마녀",
    grade: ["HG"],
  },
  {
    name: "바이아란",
    genre: "기동전사 Z건담",
    grade: ["HG"],
  },
  {
    name: "레긴레이즈 줄리에타 전용기",
    genre: "기동전사 건담 철혈의 오펀스",
    grade: ["HG"],
  },
  {
    name: "슈발베 커스텀 시클라제 기",
    genre: "기동전사 건담 철혈의 오펀스",
    grade: ["HG"],
  },
  {
    name: "윙 건담 스카이 제로",
    genre: "건담 브레이커 배틀로그",
    grade: ["HG"],
  },
  {
    name: "블레이징 건담",
    genre: "건담 브레이커 배틀로그",
    grade: ["HG"],
  },
  {
    name: "건담 헬리오스",
    genre: "건담 브레이커 배틀로그",
    grade: ["HG"],
  },
  {
    name: "제노아스 II",
    genre: "기동전사 건담 AGE",
    grade: ["HG"],
  },
  {
    name: "치낫가이",
    genre: "건담 빌드 파이터즈",
    grade: ["HG"],
  },
  {
    name: "하이퍼 걍코",
    genre: "건담 빌드 파이터즈",
    grade: ["HG"],
  },
  {
    name: "미세스 로엔그린코",
    genre: "건담 빌드 파이터즈",
    grade: ["HG"],
  },
  {
    name: "슈퍼 후미나",
    genre: "건담 빌드 파이터즈 트라이",
    grade: ["HG"],
  },
  {
    name: "위닝 후미나",
    genre: "건담 빌드 파이터즈 트라이",
    grade: ["HG"],
  },
  {
    name: "HGBD GBN 가드 프레임",
    genre: "건담 빌드 다이버스",
    grade: ["HG"],
  },
  {
    name: "임펄스 건담 랑시에",
    genre: "건담 빌드 다이버스",
    grade: ["HG"],
  },
  {
    name: "제간 블래스트 마스터",
    genre: "건담 빌드 다이버스",
    grade: ["HG"],
  },
  {
    name: "건담 지엔 알트론",
    genre: "건담 빌드 다이버스",
    grade: ["HG"],
  },
  {
    name: "모모카풀",
    genre: "건담 빌드 다이버스",
    grade: ["HG"],
  },
  {
    name: "머신 라이더",
    genre: "건담 빌드 다이버스",
    grade: ["HG"],
  },
  {
    name: "HGBD:R 코어 건담2 (티탄즈 컬러)",
    genre: "건담 빌드 다이버스 Re:Rise",
    grade: ["HG"],
  },
  {
    name: "HGBD:R 워돔 포드",
    genre: "건담 빌드 다이버스 Re:Rise",
    grade: ["HG"],
  },
  {
    name: "HGBD:R 엘도라 브루트",
    genre: "건담 빌드 다이버스 Re:Rise",
    grade: ["HG"],
  },
  {
    name: "HGBD:R 뉴 지온 건담",
    genre: "건담 빌드 다이버스 Re:Rise",
    grade: ["HG"],
  },
  {
    name: "건담 저스티스 나이트",
    genre: "건담 빌드 다이버스 Re:Rise",
    grade: ["HG"],
  },
  {
    name: "제이드라",
    genre: "기동전사 건담 AGE",
    grade: ["HG"],
  },
  {
    name: "유니콘 건담 디스트로이 모드",
    genre: "기동전사 건담 UC",
    grade: ["HG"],
  },
  {
    name: "건담(REVIE)",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
  {
    name: "",
    genre: "기동전사 건담",
    grade: ["HG"],
  },
];
