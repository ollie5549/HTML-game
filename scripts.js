const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playTone(frequency) {
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 1); // 1 second tone
}

document.getElementById('button1').addEventListener('click', () => {
  playTone(440); // A4
});

document.getElementById('button2').addEventListener('click', () => {
  playTone(523.25); // C5
});
