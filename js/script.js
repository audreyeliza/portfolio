document.addEventListener('DOMContentLoaded', function () {
    // Existing code for interest and project toggles
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

    // Updated modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalText = document.getElementById('modalText');
    const closeBtn = document.querySelector('.close');
    const galleries = document.querySelectorAll('.photo-gallery, .crochet-gallery');

    if (!modal || !modalImg || !modalText || !closeBtn || galleries.length === 0) {
        console.error('One or more required elements are missing');
        return;
    }

    galleries.forEach(gallery => {
        gallery.addEventListener('click', function (e) {
            if (e.target.classList.contains('gallery-img')) {
                modal.style.display = 'block';
                modalImg.src = e.target.src;
                modalText.textContent = e.target.alt || 'No description available';
            }
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});