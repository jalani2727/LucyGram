var imageSelector = "[data-pictureBox]";
var imageArray = document.querySelectorAll(imageSelector);
imageArray.forEach(function (lol) {
    lol.addEventListener('click', function(clickEvent){
        clickEvent.preventDefault();
        lol.classList.add('imageZoom');
    });
});