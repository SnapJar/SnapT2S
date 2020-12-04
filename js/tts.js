var msg = new SpeechSynthesisUtterance();
msg.volume = 1;
msg.rate = 1;
msg.pitch = 2;
msg.text = "Hello";
msg.lang = 'english';
window.speechSynthesis.speak(msg);
