document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const smoothScroll = () => {
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
    };

    // Improved Project Filtering
    const filterProjects = (category) => {
        const projects = document.querySelectorAll('.project-card');
        const buttons = document.querySelectorAll('.category-button');

        buttons.forEach(button => {
            const buttonCategory = button.dataset.category || button.textContent.trim().toLowerCase();
            const isActive = buttonCategory === category.toLowerCase() || (category.toLowerCase() === 'all' && buttonCategory === 'all projects');

            button.classList.toggle('active', isActive);
            button.setAttribute('aria-selected', isActive);
        });

        projects.forEach(project => {
            const projectCategory = project.dataset.category;
            const isVisible = category.toLowerCase() === 'all' || projectCategory.toLowerCase() === category.toLowerCase();

            project.style.display = isVisible ? 'block' : 'none';
            project.setAttribute('aria-hidden', !isVisible);
        });
    };

    // Event Listeners for Category Buttons
    const setupCategoryButtons = () => {
        const categoryButtons = document.querySelectorAll('.category-button');
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category || button.textContent.trim();
                filterProjects(category);
            });
        });
    };

    // Initialize Functions
    smoothScroll();
    setupCategoryButtons();
    filterProjects('all'); // Default to showing all projects
});
