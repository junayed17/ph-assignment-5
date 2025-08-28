// love count
let loveCount = 0;
function loveCountFunc() {
  loveCount++;
  console.log(loveCount);
  const countLove = document.querySelector(".countLove");
  countLove.textContent = loveCount;
}
let loveHtml = document.querySelectorAll(".heartIcon");
loveHtml.forEach((element) => {
  element.addEventListener("click", () => {
    loveCountFunc();
  });
});

// call part
let totalStar = 100;
let callHistoryArr=[]

const remainingStar = document.querySelector(".star");
remainingStar.textContent = totalStar;
const callbtn = document.querySelectorAll(".btnCall");
callbtn.forEach((element) => {
  element.addEventListener("click", () => {

    const serviceName =
      element.parentElement.parentElement.querySelector(
        ".serviceName"
      ).textContent;
    const serviceNumber =
      element.parentElement.parentElement.querySelector(".number").textContent;
    if (totalStar < 20) {
      alert("You Have Not Enough Star");
      return;
    }
    alert(`${serviceName}\nservice number:${serviceNumber}`);
    totalStar -= 20;
    remainingStar.textContent = totalStar;

    const historyObj = {
      serviceName,
      serviceNumber,
      time: time()
    };
    callHistoryArr.push(historyObj)
    console.log(callHistoryArr)
    historyCreator(callHistoryArr);
  });
});

function time(){
  const date = new Date();
  const hour=date.getHours();
  let ampm = hour >= 12 ? "PM" : "AM";
  let hourIn12=hour%12;
  let min=date.getMinutes();
  let second=date.getSeconds();
  return `${hourIn12}:${min}:${second}${ampm}`
}

function historyCreator(arr) {
  let callHistory = document.querySelector(".history");
  let historyStr = ` <div class="top">
          <div class="headeingGroup">
            <i class="fa-regular fa-clock"></i>
            Call History
          </div>
          <div class="callHistory">

          </div>
          <button class="navItems green clear">
            Clear
          </button>
        </div>`;
  arr.forEach((element) => {
    historyStr += `
      <div class="top histo">
        <div class="detail">
          <h2>${element.serviceName}</h2>
          <p>${element.serviceNumber}</p>
        </div>
        <p>${element.time}</p>
      </div>
    `;
  });

  callHistory.innerHTML = historyStr;
}

historyCreator(callHistoryArr);


// clear part
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("clear")) {
    callHistoryArr = [];
    historyCreator(callHistoryArr);
    console.log("History cleared");
  }
});


// copy partt
let copyCount=0;
const btnCopy = document.querySelectorAll(".btnCopy");


btnCopy.forEach(ele => {
  ele.addEventListener("click", () => {
    navigator.clipboard.writeText(btnCopy.textContent);
    copyCount++;
    let copyCountTag = document.querySelector(".text");
    copyCountTag.textContent = `${copyCount} Copy`;
  });

});


