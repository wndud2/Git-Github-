document.addEventListener("DOMContentLoaded", () => {
    const images = [
        '../img/부산다리.jpg',
        '../img/부산경치.jpg',
        '../img/야구장.jpeg'
    ];

    let currentIndex = 0;
    const changeBackgroundImage = () => {
        document.body.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    };

    setInterval(changeBackgroundImage, 3000);
});

document.querySelectorAll('.toc a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});