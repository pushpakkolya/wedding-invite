function openEnvelope() {
  const envelope = document.getElementById("envelope");
  const content = document.getElementById("content");

  envelope.classList.add("open");

  setTimeout(() => {
    document.querySelector(".envelope-container").style.display = "none";
    content.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1600);
}
