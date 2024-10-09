// your-script.js

// Function to create a lightbox effect for images
function openLightbox(src) {
    // Create a new image element
    const lightboxImage = document.createElement("img");
    lightboxImage.src = src;
    lightboxImage.style.width = "100%";
    lightboxImage.style.height = "auto";
    lightboxImage.style.borderRadius = "10px";
  
    // Create a lightbox container
    const lightbox = document.createElement("div");
    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = "1000";
  
    // Close lightbox on click
    lightbox.onclick = function () {
      document.body.removeChild(lightbox);
    };
  
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);
  }
  
  // Add event listeners to gallery images
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
      openLightbox(this.src);
    });
  });
  