// Initialize canvas and context
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define array to hold dots
const dots = [];

// Function to generate random number between min and max values
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Define Dot class
class Dot {
    constructor() {
        this.x = randomRange(0, canvas.width);
        this.y = randomRange(0, canvas.height);
        this.radius = randomRange(1, 3);
        this.speedX = randomRange(-1, 1);
        this.speedY = randomRange(-1, 1);
    }

    // Function to update dot position
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around canvas edges
        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.speedY *= -1;
        }
    }

    // Function to draw dot
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
}

// Function to initialize dots
function init() {
    for (let i = 0; i < 100; i++) {
        dots.push(new Dot());
    }
}

// Function to animate dots
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const dot of dots) {
        dot.update();
        dot.draw();
    }
}

// Initialize dots and start animation
init();
animate();


window.onload = function() {
    // Add click event listeners to navigation links
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            var targetId = this.getAttribute('href'); // Get target section id
            scrollToSection(targetId); // Call scrollToSection function
        });
    });
}

function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    var offsetTop = section.offsetTop;
    var headerHeight = document.querySelector('header').offsetHeight;
    var scrollToPosition = offsetTop - headerHeight;
    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}

