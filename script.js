document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Text Animation
    const greetings = ["Hi", "Hello", "Namaste", "Bonjour", "Hola"];
    let index = 0;
    const greetingElement = document.getElementById('greeting');
    
    function changeGreeting() {
        greetingElement.textContent = greetings[index];
        index = (index + 1) % greetings.length;
    }
    
    setInterval(changeGreeting, 300); // Adjust speed of text change

    // Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Modal Functionality
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.modal .close');
    
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            const projectId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            const modalImg = document.getElementById('modal-img');
            const githubLink = document.getElementById('github-link');
            const liveLink = document.getElementById('live-link');
            const hostingLink = document.getElementById('hosting-link');

            // Set the modal content based on the clicked project
            modalImg.src = `${projectId}.jpg`; // Assuming project images are named as projectId.jpg
            githubLink.href = `https://github.com/your-repo/${projectId}`;
            liveLink.href = `https://your-live-demo/${projectId}`;
            hostingLink.href = `https://your-hosting/${projectId}`;

            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll Effect
    const sections = document.querySelectorAll('section');
    function checkScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
// Add event listeners for project card clicks

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});

console.log("Hello");
console.log("hello world");



