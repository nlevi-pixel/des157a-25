(function () {
    const images = document.querySelectorAll('img');

    images.forEach((img, index) => {
        img.addEventListener('mouseover', () => {
            const container = img.parentElement;
            const allImages = container.querySelectorAll('img');

            for (let i = allImages.length - 1; i > 0; i--) {
                let imageRemove = allImages[i];
                imageRemove.style.opacity = "0";



            }
        });
    });

})();
