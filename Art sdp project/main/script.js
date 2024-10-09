// Toggle Dark/Light Mode
const toggleModeBtn = document.getElementById('toggleMode');

toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleModeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Click event for gallery images
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    alert(`You clicked on ${img.alt}`);
  });
});

// Simulated Admin Image Upload Functionality
const imageUploadForm = document.querySelector('.admin-panel form.upload'); // Ensure form has a specific class
imageUploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const imageInput = document.getElementById('imageUpload').files[0];
  if (imageInput) {
    alert(`Image ${imageInput.name} uploaded successfully!`);
  } else {
    alert('Please select an image to upload.');
  }
});

// Simulated Admin Delete Image Functionality
const deleteImageForm = document.querySelector('.admin-panel form.delete'); // Ensure form has a specific class
deleteImageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedImage = deleteImageForm.querySelector('select').value;
  if (selectedImage) {
    alert(`Image ${selectedImage} deleted successfully!`);
  } else {
    alert('Please select an image to delete.');
  }
});
