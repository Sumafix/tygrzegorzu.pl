const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        panel.classList.add('active');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 600
        && (panels[3].classList.contains('active') || panels[4].classList.contains('active'))) {
        document.querySelector('.active').classList.remove('active');
        panels[2].classList.add('active');
    }
})