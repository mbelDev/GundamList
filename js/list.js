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
