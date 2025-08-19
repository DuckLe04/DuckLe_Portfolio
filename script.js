// Smooth scroll for navigation links and buttons
document.querySelectorAll('.nav-link, .btn-cv, .btn-see-more, .btn-project-detail, .project-card').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.classList.contains('nav-link')) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        // } else if (link.classList.contains('project-card')) {
        //     e.preventDefault();
        //     const projectId = link.querySelector('.project-video')?.getAttribute('data-project') || link.querySelector('.project-name').textContent;
        //     alert(`Chuyển đến trang chi tiết của ${projectId}`);
        } else if (link.classList.contains('btn-see-more')) {
            e.preventDefault();
            window.location.href = 'all-projects.html'; // Chuyển đến trang tất cả dự án
        } else if (link.classList.contains('btn-project-detail')) {
            e.preventDefault();
            const projectId = link.closest('.project-card').querySelector('.project-name').textContent;
            window.location.href = `project-detail.html?id=${projectId}`; // Chuyển đến trang chi tiết dự án
        } 
        // else {
        //     alert('Chức năng này chưa được triển khai!');
        // }
    });
});

// Xử lý chuyển ảnh trong image-project-review
document.querySelectorAll('.project-card').forEach(card => {
    const reviewImages = card.querySelectorAll('.review-image');
    const prevBtn = card.querySelector('.prev-btn');
    const nextBtn = card.querySelector('.next-btn');
    let currentIndex = 0;

    if (reviewImages.length > 1) {
        reviewImages.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + reviewImages.length) % reviewImages.length;
            updateReviewImage();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % reviewImages.length;
            updateReviewImage();
        });
    }

    function updateReviewImage() {
        reviewImages.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });
    }
});