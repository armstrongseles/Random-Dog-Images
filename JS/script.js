document.addEventListener('DOMContentLoaded', () => {
    const fetchDogBtn = document.getElementById('fetch-dog-btn');
    fetchDogBtn.addEventListener('click', fetchDogImage);
});

/**
 * Fetch a random dog image from Dog CEO's API
 */
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            displayDogImage(data.message);
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

/**
 * Display the fetched dog image in the UI
 * @param {string} imageUrl - URL of the dog image
 */
function displayDogImage(imageUrl) {
    const dogImageContainer = document.getElementById('dog-image-container');
    const dogImageElement = document.createElement('img');
    dogImageElement.src = imageUrl;
    dogImageElement.alt = 'Random Dog Image';
    dogImageElement.id = 'dog-image';
    dogImageContainer.innerHTML = ''; // Clear previous image
    dogImageContainer.appendChild(dogImageElement);
}
