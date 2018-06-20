// JavaScript code without JQuery Functions
// JQuery section added below

var imageSelector = "[data-pictureBox]";
var bigImageSelector = "[data-target]";
var moveToFront= "[data-front]";
var theX = "[data-theX]";

var imageArray = document.querySelectorAll(imageSelector);
var bigImageTarget = document.querySelector(bigImageSelector);
var bigImageFrame = document.querySelector(moveToFront);
var xFrame = document.querySelector(theX);

imageArray.forEach(function (lol) {
    lol.addEventListener('click', function(clickEvent){
        clickEvent.preventDefault();
        bigImageTarget.classList.add('bigContent');
        bigImageTarget.setAttribute('src', lol.getAttribute('src')); 
        bigImageFrame.classList.add('moveToFront');
    });
});

// Makes it so that when i click on the image that has been moved to the front, it will remove the class that brought it to the front.

bigImageTarget.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    bigImageFrame.classList.remove('moveToFront');
});

xFrame.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    bigImageFrame.classList.remove('moveToFront');
});


// JQuery

// why doesn't this work?
// is active but only does a thing on the first img element in the pictureBox
// currently makes the first image spaz tf out
$('#smallPics').hover(function(lol) {
    var toggleIt = $('#smallPics').css('transform', 'scale(1.1)');
    toggleIt.toggle();
});
