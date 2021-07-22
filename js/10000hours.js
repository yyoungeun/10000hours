const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator() {
  const fieldValue = document.querySelector("#field_value");
  let timeValue = document.querySelector("#time_value");
  let timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector(".field_result");
  const timeResult = document.querySelector(".time_result");

  if (fieldValue.value == "") {
    alert("첫 번째 값이 입력되지 않았습니다.");
    fieldValue.focus();
    return false;
  } else if (timeValue.value == "") {
    alert("두 번째 갑이 입력되지 않았습니다.");
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    alert("잘못된 값입니다. 24이하의 값을 입력해 주세요.");
    return false;
  }

  result.style.display = "none";
  loading.style.display = "flex";

  setTimeout(function () {
    loading.style.display = "none";
    result.style.display = "flex";
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt(10000 / timeValue_int, 10);
  }, 1800);
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// 모달창 외 바깥 창 클릭 시 모달창 닫는 기능
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function copyUrl() {
  let url = window.location.href; /* url copy */
  let tmp = document.createElement("input"); /* 가상의 element */

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);

  alert("URL이 복사되었습니다.");
}

shareButton.addEventListener("click", copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);
