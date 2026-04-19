function openEnvelope() {
  const envelope = document.getElementById("envelope");
  const content = document.getElementById("content");
  const body = document.body;

  envelope.classList.add("open");

  setTimeout(() => {
    body.classList.add("opened");
  }, 800);

  setTimeout(() => {
    document.querySelector(".envelope-container").style.display = "none";
    content.classList.remove("hidden");
    content.classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1600);
}
