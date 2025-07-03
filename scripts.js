function playScript(mode) {
  let text = "";

  if (mode === 'morning') {
    text = "Hi love. Just sit up. That’s all. We’re going slow today.";
  } else if (mode === 'focus') {
    text = "Alright babe, time to focus. One task only. You’ve got this.";
  } else if (mode === 'shutdown') {
    text = "You’ve done enough. Let's slow down now. Breathe. You're safe.";

  }

  document.getElementById("message").innerText = text;

  const speech = new SpeechSynthesisUtterance(text);
  speech.voice = speechSynthesis.getVoices()[0]; // pick default voice
  speech.rate = 1;
  speech.pitch = 1.1;
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
}