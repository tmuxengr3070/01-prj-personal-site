// Get the popup modal element
const popup = document.getElementById('designPopup');

// Get the image and title elements inside the popup
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');

// Get the close button
const closeBtn = document.querySelector('.popup-close');

// Get all design thumbnail images that should trigger the popup
const designThumbnails = document.querySelectorAll('.design-popup-trigger');

// Add click event to each design thumbnail
designThumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener('click', function() {
    // Get the image source and title from data attributes
    const imageSrc = this.getAttribute('data-image');
    const imageTitle = this.getAttribute('data-title');
    
    // Set the popup image and title
    popupImage.src = imageSrc;
    popupTitle.textContent = imageTitle;
    
    // Show the popup with fade-in animation
    popup.style.display = 'block';
    // Trigger reflow to restart animation
    popup.offsetHeight;
  });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && popup.style.display === 'block') {
    popup.style.display = 'none';
  }
});
