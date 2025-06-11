let audioContext;

try {
  audioContext =
    new (window.AudioContext || window.webkitAudioContext)();
} catch (error) {
  window.alert(
    `Sorry, but your browser doesn't support the Web Audio API!`
  );
}

if (audioContext !== undefined) {
  /* Our code goes here */
}
