// Web Font Loader Script for loading Google Fonts
WebFont.load({
  google: {
    families: ["Changa One:400,400italic", "Gothic A1:300,400,500,600,700", "Montserrat Subrayada:400"]
  }
});

/*
 * JavaScript to toggle the mobile menu visibility
 */
document.addEventListener('DOMContentLoaded', function() {
  const navButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.w-nav-menu');

  navButton.addEventListener('click', function() {
    navLinks.classList.toggle('active'); // Toggle the "active" class to show/hide the mobile menu
  });
});

/*
 * JavaScript function to copy contract address to clipboard
 */
function copyToClipboard() {
  const address = document.getElementById("new-contract-address").innerText.replace("CA: ", "");
  navigator.clipboard.writeText(address).then(function() {
    const feedback = document.getElementById("new-copy-feedback");
    feedback.style.display = 'block'; // Show "Copied!" message
    setTimeout(() => { feedback.style.display = 'none'; }, 2000); // Hide after 2 seconds
  });
}

/*
 * JavaScript for smooth scrolling navigation
 */
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/*
 * JavaScript to handle dynamic video background (if needed for multiple videos)
 */
document.querySelectorAll('.video-container').forEach((container) => {
  const video = container.querySelector('video');

  if (video) {
    video.setAttribute('autoplay', 'true');
    video.setAttribute('loop', 'true');
    video.setAttribute('muted', 'true');
  }
});
