document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById('hi');
    const heroText = document.getElementById('hero-text');

    button1.addEventListener('click', function() {
        button1.style.display = "none"
        const paragraph = document.createElement('p');
        paragraph.id = 'nice-paragraph';
        paragraph.innerHTML =
        "This is a nice paragraph that appears when you click the button!";
        heroText.appendChild(paragraph);
    });
});
