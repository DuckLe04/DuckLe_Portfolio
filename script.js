// Smooth scroll for navigation links and buttons
document.querySelectorAll('.nav-link, .btn-cv, .btn-all-projects, .project-card').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.classList.contains('nav-link')) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        } else if (link.classList.contains('project-card')) {
            e.preventDefault();
            const projectId = link.querySelector('.project-video').getAttribute('data-project');
            alert(`Chuyển đến trang chi tiết của ${projectId}`);
        } else {
            alert('Chức năng này chưa được triển khai!');
        }
    });
});

const projectsContainer = document.querySelector('.projects-container');
const projectVideos = document.querySelectorAll('.project-video');
let scrollSpeed = 1; // Tốc độ cuộn (px mỗi frame)
let isPaused = false; // Trạng thái tạm dừng

// Tạo hiệu ứng cuộn vô tận
function setupInfiniteScroll() {
    // Sao chép tất cả các project và thêm vào cuối container
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        const projectClone = project.cloneNode(true); // Sao chép project
        projectsContainer.appendChild(projectClone); // Thêm vào cuối
    });
}

function smoothScroll() {
    if (!isPaused) {
        projectsContainer.scrollLeft += scrollSpeed;

        // Kiểm tra nếu cuộn đến điểm nối (gần cuối của nội dung ban đầu)
        const originalWidth = projectsContainer.scrollWidth / 2; // Độ dài nội dung ban đầu
        if (projectsContainer.scrollLeft >= originalWidth - projectsContainer.clientWidth) {
            projectsContainer.scrollLeft -= originalWidth; // Nhảy về vị trí tương ứng ở đầu
        }
    }

    requestAnimationFrame(smoothScroll);
}

// Tạm dừng cuộn khi hover vào video
projectVideos.forEach((video) => {
    video.addEventListener('mouseenter', () => {
        isPaused = true; // Tạm dừng cuộn
    });

    video.addEventListener('mouseleave', () => {
        isPaused = false; // Tiếp tục cuộn
    });
});

// Bắt đầu cuộn
if (projectsContainer) {
    setupInfiniteScroll(); // Thiết lập cuộn vô tận
    requestAnimationFrame(smoothScroll); // Bắt đầu cuộn
}