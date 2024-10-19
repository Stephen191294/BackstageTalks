document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const sectionColors = ['#ffffb3', '#ff0066', '#ffffff', '#00c1b5', '#ff651a', '#ffbe00', '#1d3fbb', '#e30512'];
const sections = document.querySelectorAll('section');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      let scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionMiddle = sectionTop + sectionHeight / 2; // Middle of the section

        // Check if the middle of the viewport is within the current section's middle
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.body.style.backgroundColor = sectionColors[index];
        }
      });

      ticking = false;
    });

    ticking = true;
  }
});

