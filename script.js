const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = process.env.API_KEY;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements for Links and Photos
const displayPhotos = () => {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Creating an anchor element to link ot Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        item.setAttribute('rel', 'noopener noreferrer');
        // Creating image tag for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Putting image inside the link tag and then inserting it inside the image-container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
const getPhotos = async () => {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
};

getPhotos();