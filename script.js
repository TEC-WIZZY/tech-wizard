// Function to toggle side menu visibility
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.style.right = menu.style.right === '0px' ? '-250px' : '0px';
}

// Function to move the image slider
let currentIndex = 0;
const sliderImages = document.querySelectorAll('.gallery .slider img');

function moveSlider(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % sliderImages.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    }
    document.querySelector('.gallery .slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to handle search content (this is just a placeholder function)
function searchContent() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    console.log('Search for:', searchTerm);
}

// Function to show login popup
function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

// Add event listener to close popup when clicked outside
document.getElementById('popup').addEventListener('click', (e) => {
    if (e.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
