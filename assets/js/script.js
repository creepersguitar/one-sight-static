document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById('hi');
    const heroText = document.getElementById('hero-text');

    button1.addEventListener('click', function() {
        button1.style.display = "none"
        const paragraph = document.createElement('p');
        paragraph.id = 'nice-paragraph';
        paragraph.innerHTML =
        `Hi,
        Thanks for the opportunity for the second interview,
        I hope i got the job :)
        Thank you both Tom and Adrian for your time.`;
        heroText.appendChild(paragraph);
    });
});
