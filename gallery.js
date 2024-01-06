function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;

    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
}

const imageSources = [];
for (let i = 2; i <= 16; i++) {
    if (i === 3 || i === 4) {
        continue;
    }
    imageSources.push(`images/galleryphoto/${i}.jpg`);
}

// Get the gallery container
const galleryContainer = document.getElementById('imageGallery');

// Loop through the image sources array
imageSources.forEach((src, index) => {
    // Create an img element
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = `Image ${index + 2}`;
    imgElement.classList.add('gallery-img');
    imgElement.onclick = function () {
        showImage(src);
    };

    // Append the img element to the gallery container
    galleryContainer.appendChild(imgElement);
});


