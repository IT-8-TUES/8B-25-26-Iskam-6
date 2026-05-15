function changeImage(imageSrc) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.getElementsByClassName('thumbnail');

    for (let thumbnail of thumbnails) {
        thumbnail.addEventListener('click', function () {
            for (let t of thumbnails) {
                t.classList.remove('active');
            }
            this.classList.add('active');

            const imageSrc = this.children[0].src;
            changeImage(imageSrc);
        });
    }
});