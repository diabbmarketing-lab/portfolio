const contentBox = document.getElementById("project-card");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  contentBox.classList.toggle("project-card-extend");
  toggleBtn.textContent = contentBox.classList.contains("project-card-extend")
    ? "See Less"
    : "See More";
});

function loadMore() {
  const btn = document.querySelector(".load-more-btn");
  btn.textContent = "Loading...";

  setTimeout(() => {
    btn.textContent = "All Projects Loaded";
    btn.disabled = true;
    btn.style.opacity = "0.5";
  }, 1000);
}

function openContactForm() {
  alert("Contact form would open here.");
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded successfully");
});
