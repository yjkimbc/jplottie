

/* 카드 템플릿. 새로 추가하는 로티를 맨 위에 배치하세요.
type속성에 "전체"는 필수, "로딩", "아이콘" 등은 택1 해서 작성합니다.(필터 용도)*/
const template = document.getElementById("card-template");
const contents = document.querySelector(".contents");
const buttons = document.querySelectorAll(".filter-button");

const data = [
  {
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11767/lottie_xmas_aos.json",
    title: "lottie_xmas_aos.json",
    type: ["전체", "이벤트"]
},
{
  src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11768/lottie_xmas_ios.json",
  title: "lottie_xmas_ios.json",
  type: ["전체", "이벤트"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11033/lottie_loading.json",
    title: "lottie_loading.json",
    type: ["전체", "로딩"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11034/lottie_spinner.json",
    title: "lottie_spinner.json",
    type: ["전체", "로딩"]
},
{
  src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11026/lottie_spinner_finish.json",
  title: "lottie_spinner_finish.json",
  type: ["전체", "로딩"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11028/lottie_navi_alarm.json",
    title: "lottie_navi_alarm.json",
    type: ["전체", "아이콘"]
},
{
  src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11029/lottie_navi_compare.json",
  title: "lottie_navi_compare.json",
  type: ["전체", "아이콘"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11030/lottie_navi_hire.json",
    title: "lottie_navi_hire.json",
    type: ["전체", "아이콘"]
},
{
  src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11031/lottie_navi_my.json",
  title: "lottie_navi_my.json",
  type: ["전체", "아이콘"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11032/lottie_navi_news.json",
    title: "lottie_navi_news.json",
    type: ["전체", "아이콘"]
},
{
  src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11027/lottie_planet_loading.json",
  title: "lottie_planet_loading.json",
  type: ["전체", "로딩"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11019/lottie_magic.json",
    title: "lottie_magic.json",
    type: ["전체", "이벤트"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/10949/lottie_partypopper.json",
    title: "lottie_partypopper.json",
    type: ["전체", "이벤트"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11017/lottie_appsplash.json",
    title: "lottie_appsplash.json",
    type: ["전체", "로딩"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11018/lottie_easypass_loading.json",
    title: "lottie_easypass_loading.json",
    type: ["전체", "이벤트"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11020/lottie_match_simple.json",
    title: "lottie_match_simple.json",
    type: ["전체", "이벤트"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11021/lottie_match.json",
    title: "lottie_match.json",
    type: ["전체", "이벤트"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11022/lottie_mo_skeleton.json",
    title: "lottie_mo_skeleton.json",
    type: ["전체", "로딩"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11023/lottie_salary.json",
    title: "lottie_salary.json",
    type: ["전체", "이벤트"]
},
{
    src: "https://jpassets.jobplanet.co.kr/production/uploads/material/media/11025/lottie_salary_lock.json",
    title: "lottie_salary_lock.json",
    type: ["전체", "이벤트"]
}
];


        data.forEach((item) => {
          const card = template.content.cloneNode(true);
          card.querySelector("lottie-player").setAttribute("src", item.src);
          card.querySelector(".title").textContent = item.title;
          contents.appendChild(card);
        });
        
        function copy_to_clipboard(elem) {
          const input = elem.previousElementSibling;
          input.select();
          document.execCommand("copy");
        }

// 버튼 클릭 시 해당 타입의 데이터만 노출
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    showData(filter);

    // 클릭된 버튼에 "active" 클래스 추가
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});

// 데이터를 필터링하여 보여주는 함수
function showData(filter) {
  contents.innerHTML = "";
  data.forEach((item) => {
    if (item.type.includes(filter) || filter === "all") {
      const card = template.content.cloneNode(true);
      card.querySelector("lottie-player").setAttribute("src", item.src);
      card.querySelector(".title").textContent = item.title;

      const input = card.querySelector(".myInput");
      input.value = item.src;

      const add = card.querySelector(".add");
      add.addEventListener("click", () => {
        copy_to_clipboard(add);
      });

      contents.appendChild(card);
    }
  });

  // 버튼의 "active" 클래스 유무에 따라 스타일 적용
  buttons.forEach((button) => {
    if (button.classList.contains("active")) {
      button.style.color = "#323438";
    } else {
      button.style.color = "#323438";
    }
  });
}

// copy_to_clipboard 함수
function copy_to_clipboard(button) {
  const lottieSrc = button.parentNode.previousElementSibling.getAttribute('src');
  const textArea = document.createElement('textarea');
  textArea.value = lottieSrc;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);


  // Toast 메시지 생성
  const toast = document.createElement('div');
  toast.classList.add('toast-ui');
  toast.textContent = '주소를 복사했어요';
  document.body.appendChild(toast);

  // Toast 메시지 표시
  setTimeout(() => {
    toast.classList.add('show');
  }, 0);

  // 1초 후에 Toast 메시지 삭제
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 1500);
  }, 1500);
}
        
        