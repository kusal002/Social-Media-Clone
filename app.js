const likeButton = document.querySelector(".like-btn");
const likeImage = document.querySelector(".like-png");
const likeCount = document.querySelector(".like-count");
let settingsMenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn");

likeButton.addEventListener("click", () => {
  if (likeImage.src.includes("like")) {
    likeImage.src = "like-blue.png";
  } else {
    likeImage.src = "like.png";
  }
});

let likes = 0;

const storedLikes = localStorage.getItem("likes");
if (storedLikes) {
  likes = parseInt(storedLikes);
}
likeCount.textContent = `${likes}`;

likeButton.addEventListener("click", () => {
  likes++;
  localStorage.setItem("likes", likes);
  likeCount.textContent = `${likes}`;
});

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme", "dark") == "light") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme", "dark") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
