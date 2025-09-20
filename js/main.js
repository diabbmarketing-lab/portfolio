const contentBox = document.getElementById("project-card");
const toggleBtn = document.getElementById("toggleBtn");


// Start overlay
    const pics = document.querySelectorAll(".pic");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");

    // Open overlay when clicking any image
    pics.forEach(pic => {
      pic.addEventListener("click", () => {
        overlay.style.display = "flex";
        overlayImg.src = pic.src;
      });
    });

    // Close overlay when clicking anywhere
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
    });

// End OverLay
// Read More Button 
const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // find the closest project card
    const card = btn.closest(".project-card");
    const projectMeta = card.querySelector(".project-meta");

    projectMeta.classList.toggle("expanded");

    if (projectMeta.classList.contains("expanded")) {
      btn.textContent = "Read Less";
    } else {
      btn.textContent = "Read More";
    }
  });
});


// Read More and Less Button
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
