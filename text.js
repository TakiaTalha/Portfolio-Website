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

window.addEventListener('scroll', function() {
    var element = document.getElementById('animatedBox');
    var position = element.getBoundingClientRect();

    // Checking if the element is within the viewport
    if(position.top < window.innerHeight && position.bottom >= 0) {
        document.querySelector('.top-border').style.width = '100%';
        document.querySelector('.bottom-border').style.width = '100%';
        document.querySelector('.left-border').style.height = '100%';
        document.querySelector('.right-border').style.height = '100%';
    }
});
