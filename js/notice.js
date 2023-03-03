/// 알람을 담당하는 부분..
/// LocalStorage에 확인 했는지? 안 했는지? 체크넣어서 한 번만 보여주게 하기.
/// 이후 알람 확인은 알림 버튼을 눌러서 하는데 이거 왜 시발 안 되냐???

const main = document.querySelector(".wrap");
// notice_wnd = document.createElement("div");
// notice_wnd.classList.add("notice");
// main.append(notice_wnd);
// notice_wnd 에 noticeList의 content를 넣어서 뿌린다.
// notice_wnd가 없고 notice가 남아있으면 뿌린다. 있으면 안 뿌린다. 닫았는데 notice가 남아있다? 다시 뿌린다. 없어질 때 까지.
// 남은 알림 갯수 표시하고 모두 읽음으로 처리하기 버튼을 넣자.
// LocalStorage에 읽은 notice의 갯수를 저장. key : noticeChecked , value : int(n)
// LocalStorage의 notice 의 length가 noticeChecked와 같은지 비교. 다르면 출현시키고 남은 notice는 noticeChecked - length가 된다.

if( localStorage.getItem("notice") != null ){

}else{
    localStorage.setItem("notice")
}

noticeList = [
    {
        data : "2023-03-03",
        content : "필터 기능이 정상 작동하게 되었읍니다!!",
        checked : false,
    }
]

// JSP로 전부 SQL에 쑤셔넣고싶다 시발~~!!!