
const input = document.getElementById('input');
const text = document.getElementById('text').innerText;
const result = document.getElementById('result');

let startTime;

input.addEventListener('focus', () => {
    if (!startTime) {
        startTime = new Date();
    }
});

input.addEventListener('input', () => {
    if (input.value === text) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        const words = text.split(" ").length;
        const speed = Math.round((words / timeTaken) * 60);
        result.innerText = `You typed ${words} words in ${timeTaken.toFixed(2)} seconds. Speed: ${speed} WPM`;
        input.disabled = true;
    }
});
