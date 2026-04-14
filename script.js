function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const content = document.getElementById("content");

  envelope.classList.add("open");

  setTimeout(() => {
    document.querySelector(".envelope-container").style.display = "none";
    content.classList.remove("hidden");

    // soft scroll effect
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1200);
}
