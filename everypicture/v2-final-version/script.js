(function(){
    const sections = document.querySelectorAll("article.accordion section div");

    sections.forEach((section) => {
        const images = section.querySelectorAll("img");

        images.forEach((img) => {
            img.addEventListener("click", function () {
                const visibleImages = section.querySelectorAll("img:not([style*='display: none'])");

                if (visibleImages.length > 1) {
                    img.style.display = "none"; 
                }

            });
        });
    });

}());
