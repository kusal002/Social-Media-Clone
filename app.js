const likeButtons = Array.from(document.getElementsByClassName("like-btn"));

let settingsMenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn");

likeButtons.map((eachButton, index) => {
  const likeImage = eachButton.getElementsByClassName("like-png")[0];
  const likeCount = eachButton.getElementsByClassName("like-count")[0];
  console.log(index);

  function isLiked() {
    if (localStorage.getItem(`index${index}`) == "true") {
      likeCount.textContent = 1;
      likeImage.src = "like-blue.png";
    } else {
      likeCount.textContent = "Like";
      likeImage.src = "like.png";
    }
  }
  isLiked();
  eachButton.addEventListener("click", () => {
    if (localStorage.getItem(`index${index}`) == "true") {
      localStorage.setItem(`index${index}`, false);
      likeCount.textContent = "Like";
      likeImage.src = "like.png";
    } else {
      localStorage.setItem(`index${index}`, true);
      likeCount.textContent = 1;
      likeImage.src = "like-blue.png";
    }
  });
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
