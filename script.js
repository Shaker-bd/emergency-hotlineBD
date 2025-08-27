const cardHearts = document.querySelectorAll(".card-heart");
const callHistoryData = [];

for (let heart of cardHearts) {
  heart.addEventListener("click", function () {
    let navHeart = parseInt(
      document.getElementById("nav-heart-count").innerText
    );
    const heartCount = navHeart + 1;
    document.getElementById("nav-heart-count").innerText = heartCount;
  });
}

// Copy Text
function getHotlineNumber(id) {
  const hotlineNumber = parseInt(document.getElementById(id).innerText);
  return hotlineNumber;
}
const copyCount = parseInt(
  document.getElementById("text-copy-count").innerText
);
// Copy Count function
function getCopyCount(id) {
  const copyCount = parseInt(document.getElementById(id).innerText);
  const updateCount = copyCount + 1;
  document.getElementById(id).innerText = updateCount;
}
// National text copy
document
  .getElementById("national-copy-btn")
  .addEventListener("click", function () {
    navigator.clipboard.writeText(getHotlineNumber("national-number"));
    getCopyCount("text-copy-count");
  });
// Police text copy
document
  .getElementById("police-copy-btn")
  .addEventListener("click", function () {
    navigator.clipboard.writeText(getHotlineNumber("police-number"));
    getCopyCount("text-copy-count");
  });
//   Fire text copy
document.getElementById("fire-copy-btn").addEventListener("click", function () {
  navigator.clipboard.writeText(getHotlineNumber("fire-number"));
  getCopyCount("text-copy-count");
});
//   Ambulance text copy
document
  .getElementById("ambulance-copy-btn")
  .addEventListener("click", function () {
    navigator.clipboard.writeText(getHotlineNumber("ambulance-number"));
    getCopyCount("text-copy-count");
  });
//   Electricity text copy
document
  .getElementById("electricity-copy-btn")
  .addEventListener("click", function () {
    navigator.clipboard.writeText(getHotlineNumber("electricity-number"));
    getCopyCount("text-copy-count");
  });
//   Rail text copy
document.getElementById("rail-copy-btn").addEventListener("click", function () {
  navigator.clipboard.writeText(getHotlineNumber("railway-number"));
  getCopyCount("text-copy-count");
});
// Call button function

document
  .getElementById("national-call-btn")
  .addEventListener("click", function () {
    const availableStar = parseInt(
      document.getElementById("nav-star-count").innerText
    );
    if (availableStar < 20) {
      alert("You dont have enougt Coin. You need minimum 20 Coin to call.");
      return;
    }
    const updatedStar = availableStar - 20;
    document.getElementById("nav-star-count").innerText = updatedStar;
    alert(
      `Calling National Emergency Number ${getHotlineNumber("national-number")}`
    );

    // Data Collection
    const data = {
      name: "National Emergency Number",
      number: getHotlineNumber("national-number"),
      date: new Date().toLocaleTimeString(),
    };
    callHistoryData.push(data);
    getHistory();
  });
document
  .getElementById("police-call-btn")
  .addEventListener("click", function () {
    const availableStar = parseInt(
      document.getElementById("nav-star-count").innerText
    );
    if (availableStar < 20) {
      alert("You dont have enougt Coin. You need minimum 20 Coin to call.");
      return;
    }
    const updatedStar = availableStar - 20;
    document.getElementById("nav-star-count").innerText = updatedStar;
    alert(
      `Calling Police Helpline Number ${getHotlineNumber("police-number")}`
    );

    // Data Collection
    const data = {
      name: "Police Helpline Number",
      number: getHotlineNumber("national-number"),
      date: new Date().toLocaleTimeString(),
    };
    callHistoryData.push(data);
    getHistory();
  });
document.getElementById("fire-call-btn").addEventListener("click", function () {
  const availableStar = parseInt(
    document.getElementById("nav-star-count").innerText
  );
  if (availableStar < 20) {
    alert("You dont have enougt Coin. You need minimum 20 Coin to call.");
    return;
  }
  const updatedStar = availableStar - 20;
  document.getElementById("nav-star-count").innerText = updatedStar;
  alert(`Calling Fire Service Helpline ${getHotlineNumber("fire-number")}`);

  // Data Collection
  const data = {
    name: "Fire Service Helpline",
    number: getHotlineNumber("national-number"),
    date: new Date().toLocaleTimeString(),
  };
  callHistoryData.push(data);
  getHistory();
});
document
  .getElementById("ambulance-call-btn")
  .addEventListener("click", function () {
    const availableStar = parseInt(
      document.getElementById("nav-star-count").innerText
    );
    if (availableStar < 20) {
      alert("You dont have enougt Coin. You need minimum 20 Coin to call.");
      return;
    }
    const updatedStar = availableStar - 20;
    document.getElementById("nav-star-count").innerText = updatedStar;
    alert(`Calling Ambulance Service ${getHotlineNumber("ambulance-number")}`);

    // Data Collection
    const data = {
      name: "Ambulance Service",
      number: 1994999999,
      date: new Date().toLocaleTimeString(),
    };
    callHistoryData.push(data);
    getHistory();
  });
document
  .getElementById("electricity-call-btn")
  .addEventListener("click", function () {
    const availableStar = parseInt(
      document.getElementById("nav-star-count").innerText
    );
    if (availableStar < 20) {
      alert("You dont have enougt Coin. You need minimum 20 Coin to call.");
      return;
    }
    const updatedStar = availableStar - 20;
    document.getElementById("nav-star-count").innerText = updatedStar;
    alert(
      `Calling Electricity Helpline ${getHotlineNumber("electricity-number")}`
    );

    // Data Collection
    const data = {
      name: "Electricity Helpline",
      number: 16216,
      date: new Date().toLocaleTimeString(),
    };
    callHistoryData.push(data);
    getHistory();
  });
document.getElementById("rail-call-btn").addEventListener("click", function () {
  const availableStar = parseInt(
    document.getElementById("nav-star-count").innerText
  );
  if (availableStar < 20) {
    alert("You dont have enougt Star");
    return;
  }
  const updatedStar = availableStar - 20;
  document.getElementById("nav-star-count").innerText = updatedStar;
  alert(`Calling Railway Hotline ${getHotlineNumber("railway-number")}`);

  // Data Collection
  const data = {
    name: "Railway Service",
    number: 163,
    date: new Date().toLocaleTimeString(),
  };
  callHistoryData.push(data);
  getHistory();
});

function getHistory() {
  const callHistoryContainer = document.getElementById("history-container");
  callHistoryContainer.innerText = "";
  for (const data of callHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="history-item bg-white p-1 rounded-sm mb-1">
                <div class = 'bg-gray-100 shadow-lg flex items-center justify-between'>
                <div >
                    <h3 class ='font-bold'>${data.name}</h3>
                    <h3>${data.number}</h3>
                </div>
                <div>${data.date}</div></div>
            </div>
      `;
    callHistoryContainer.appendChild(div);
  }
}

document
  .getElementById("histry-clear-btn")
  .addEventListener("click", function () {
    document.getElementById("history-container").innerText = "";
    callHistoryData.length = 0;
  });
