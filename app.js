const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const greetings = ["I'm good you little piece of shit",
                  "Leave me alone you motherfucker",
                  "Leave me alone you dumb ass",
                  "Doing good homeboi"];

const weather = [
    'Weather is motherfucking good. Just do your work instead of wasting time',
    'Do your business your motherfucker. Please dont give a fuck Boychott'
]

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('Voice is activated, you can speak to microphone!')
};

recognition.onresult = (event) => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;

    readOutLoud(transcript);
};

// Add the listener to the Button
btn.addEventListener('click', () => {
    recognition.start();
});

const readOutLoud = (message) => {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what are you saying';

    if(message.includes('how are you')){
        const ans = greetings[(Math.floor(Math.random() * greetings.length))];
        speech.text = ans;
    }

    if(message.includes('weather')){
        const ans = weather[(Math.floor(Math.random() * weather.length))];
        speech.text = ans
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
