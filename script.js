document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // Project Filtering
    const filterProjects = (category) => {
        const projects = document.querySelectorAll('.project-card');
        const buttons = document.querySelectorAll('.category-button');

        buttons.forEach(button => {
            button.classList.toggle('active', button.dataset.category === category);
        });

        projects.forEach(project => {
            const projectCategory = project.dataset.category;
            const isVisible = category === 'all' || projectCategory === category;
            project.style.display = isVisible ? 'block' : 'none';
        });
    };

    // Event Listeners for Filter Buttons
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterProjects(category);
        });
    });

    // Initialize
    filterProjects('all');
});