var imageSelector = "[data-pictureBox]";
var bigImageSelector = "[data-target]";
var moveToFront= "[data-front]";

var imageArray = document.querySelectorAll(imageSelector);
var bigImageTarget = document.querySelector(bigImageSelector);
var bigImageFrame = document.querySelector(moveToFront);

imageArray.forEach(function (lol) {
    lol.addEventListener('click', function(clickEvent){
        clickEvent.preventDefault();
        bigImageTarget.classList.add('bigContent');
        bigImageTarget.setAttribute('src', lol.getAttribute('src')); 
        bigImageFrame.classList.add('moveToFront');
    });
});

// Makes it so that when i click on the image that has been moved to the front, it will remove the class that has brought it to the front.
bigImageTarget.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    bigImageFrame.classList.remove('moveToFront');
});
