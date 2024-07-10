document.querySelectorAll('.interest-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const interestType = button.dataset.interest;
        document.querySelectorAll('.interest-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(`${interestType}-content`).classList.remove('hidden');
        document.querySelectorAll('.interest-toggle').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

document.querySelectorAll('.project-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const projectType = button.dataset.project;
        document.querySelectorAll('.project-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(`${projectType}-content`).classList.remove('hidden');
        document.querySelectorAll('.project-toggle').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});