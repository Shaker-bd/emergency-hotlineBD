const cardHearts = document.querySelectorAll(".card-heart");

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
