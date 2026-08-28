const audio = new Audio();
let currentCard = null;

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function resetCard(card) {
  const btn = card.querySelector(".play-btn");
  const progress = card.querySelector(".progress");
  const timeEl = card.querySelector(".time");

  btn.classList.remove("is-playing");
  progress.value = 0;
  timeEl.textContent = "0:00 / 0:00";
  card.classList.remove("playing");
}

document.querySelectorAll(".track-card").forEach((card) => {
  const btn = card.querySelector(".play-btn");
  const progress = card.querySelector(".progress");
  const timeEl = card.querySelector(".time");
  const src = card.dataset.src;

  btn.addEventListener("click", () => {
    if (currentCard === card && !audio.paused) {
      audio.pause();
      btn.classList.remove("is-playing");
      card.classList.remove("playing");
      return;
    }

    if (currentCard && currentCard !== card) {
      resetCard(currentCard);
    }

    if (currentCard !== card || audio.src !== new URL(src, window.location.href).href) {
      audio.src = src;
    }

    audio.play().catch(() => {
      timeEl.textContent = "File not found";
    });

    currentCard = card;
    btn.classList.add("is-playing");
    card.classList.add("playing");
  });

  progress.addEventListener("input", () => {
    if (currentCard === card && audio.duration) {
      audio.currentTime = (progress.value / 100) * audio.duration;
    }
  });
});

audio.addEventListener("timeupdate", () => {
  if (!currentCard) return;

  const progress = currentCard.querySelector(".progress");
  const timeEl = currentCard.querySelector(".time");
  const pct = (audio.currentTime / audio.duration) * 100 || 0;

  progress.value = pct;
  timeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

audio.addEventListener("ended", () => {
  if (currentCard) resetCard(currentCard);
  currentCard = null;
});

audio.addEventListener("error", () => {
  if (!currentCard) return;
  const timeEl = currentCard.querySelector(".time");
  timeEl.textContent = "Add MP3 to audio/ folder";
  resetCard(currentCard);
  currentCard = null;
});
