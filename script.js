function openEnvelope() {
  const envelope = document.getElementById("envelope");

  envelope.classList.add("open");

  setTimeout(() => {
    document.querySelector(".envelope-container").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  }, 1400);
}

function openPage(pageId) {
  document.getElementById("main").classList.add("hidden");

  document.querySelectorAll(".page").forEach(p => {
    p.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}
