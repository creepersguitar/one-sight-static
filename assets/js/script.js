document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('hi');
    const heroText = document.getElementById('hero-text');

    button.addEventListener('click', function() {
        const paragraph = document.createElement('p');
        paragraph.id = 'nice-paragraph';
        paragraph.innerHTML =
        "This is a nice paragraph that appears when you click the button!";
        heroText.appendChild(paragraph);
    });
});
