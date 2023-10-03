const modal = document.querySelector("#modal");
const share_btn = document.querySelector(".btn_share");
const follow_btn = document.querySelector(".btn_follow");
const bodyElm = document.getElementsByTagName("body");
const cut_btn = document.getElementById("cut_btn");
share_btn.addEventListener("click", () => {
  modal.style.opacity = "1";
  document.getElementById("overlay").style.display = "block";
});
cut_btn.addEventListener("click", () => {
  modal.style.opacity = "0";
  document.getElementById("overlay").style.display = "none";
});
document.getElementById("overlay").addEventListener("click", () => {
  modal.style.opacity = "0";
  document.getElementById("overlay").style.display = "none";
});
