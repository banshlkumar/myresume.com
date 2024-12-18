// script.js
document.querySelector('.btn-enroll').addEventListener('click', () => {
    alert('Thank you for enrolling!');
});
// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Dynamic content for "Enroll Now" button
const enrollButton = document.querySelector('.btn-enroll');
enrollButton.addEventListener('click', () => {
    const enrollSection = document.getElementById('enroll');
    enrollSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercentage + '%';
});
// Back-to-top functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);
// Form validation and submission
const form = document.getElementById('enrollment-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = '#e63900';
        formMessage.style.display = 'block';
    } else {
        formMessage.textContent = 'Thank you for registering!';
        formMessage.style.color = '#28a745';
        formMessage.style.display = 'block';

        // Reset form after submission
        form.reset();
    }
});
// Simulating payment
document.getElementById('pay-now').addEventListener('click', () => {
    alert('Redirecting to payment gateway...');
    setTimeout(() => {
        alert('Payment Successful! Welcome to the course.');
    }, 2000);
});
// Simulated course progress
let progress = 0;

function updateProgress() {
    if (progress < 100) {
        progress += 10;
        const progressBar = document.getElementById('course-progress-bar');
        const progressPercentage = document.getElementById('progress-percentage');
        progressBar.style.width = `${progress}%`;
        progressPercentage.textContent = `${progress}% Complete`;
    } else {
        alert('Congratulations! You have completed the course.');
    }
}

// Simulate progress every 5 seconds
setInterval(updateProgress, 5000);
// Redirect to Zoom meeting
document.getElementById('join-class').addEventListener('click', () => {
    window.open('https://zoom.us/join', '_blank');
});
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.prev-testimonial').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
});

document.querySelector('.next-testimonial').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
});

// Initial display
showTestimonial(currentTestimonialIndex);
