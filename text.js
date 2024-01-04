const texts = ['CS Student', 'ML Developer', 'Website Manager', 'Campus Ambassador'];

let count = 0;

function changeText() {
    const textElement = document.getElementById("transition-text");

    // Simple fade effect
    textElement.style.opacity = 1;

    setTimeout(() => {
        count = (count + 1) % texts.length;
        textElement.textContent = texts[count];
        textElement.style.opacity = 1;
    }, 1000);
}

// Change text every 4 seconds
setInterval(changeText, 1000);

