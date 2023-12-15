/* 카드 템플릿. 새로 추가하는 로티를 맨 위에 배치하세요 */
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
              title: "ottie_xmas_ios.json",
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

        data.forEach(item => {
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

// 초기 데이터를 보여줍니다.
showData("all");

// 버튼 클릭 시 해당 타입의 데이터만 보여줍니다.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    showData(filter);
  });
});

// 데이터를 필터링하여 보여주는 함수입니다.
function showData(filter) {
  contents.innerHTML = "";
  data.forEach((item) => {
    if (item.type.includes(filter) || filter === "all") {
      const card = document.createElement("article");
      card.classList.add("card-item");

      const player = document.createElement("lottie-player");
      player.src = item.src;
      player.background = "transparent";
      player.speed = 1;
      player.style.width = "100%";
      player.style.height = "250px";
      player.setAttribute("hover", "");
      player.setAttribute("loop", "");

      const cardText = document.createElement("div");
      cardText.classList.add("card-text");

      const title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = item.title;

      const input = document.createElement("input");
      input.classList.add("myInput");
      input.value = item.src;
      input.setAttribute("readonly", "");

      const add = document.createElement("span");
      add.classList.add("add");
      add.textContent = "주소 복사";
      add.addEventListener("click", () => {
        copy_to_clipboard(add);
      });

      cardText.appendChild(title);
      cardText.appendChild(input);
      cardText.appendChild(add);

      card.appendChild(player);
      card.appendChild(cardText);

      contents.appendChild(card);
    }
  });
}

/*주소 복사 기능*/
function copy_to_clipboard(button) {
    const lottieSrc = button.parentNode.previousElementSibling.getAttribute('src');
    const textArea = document.createElement('textarea');
    textArea.value = lottieSrc;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('주소를 복사했어요');
  }
