const countdownEl = document.getElementById('countdown');
const rocket = document.getElementById('rocket');
const secondStage = document.getElementById('secondStage');
const launchScene = document.getElementById('launchScene');

let timeLeft = 10;

// Countdown
const countdownTimer = setInterval(() => {
  countdownEl.textContent = `T-minus ${timeLeft}`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(countdownTimer);
    countdownEl.textContent = "Lift-off!";
    startLaunch();
  }
}, 1000);

// Start Launch
function startLaunch() {
  rocket.classList.add('shake');

  setTimeout(() => {
    rocket.classList.remove('shake');
    rocket.style.animation = 'liftoff 15s ease-in-out forwards';

    // Stage Separation (after 7 seconds)
    setTimeout(() => {
      secondStage.style.display = 'block';
      secondStage.style.animation = 'liftoff 10s ease-in-out forwards';
    }, 7000);
  }, 2000);
}