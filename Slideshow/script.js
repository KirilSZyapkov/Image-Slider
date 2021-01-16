let image = [];
image[0] = '1.jpg';
image[1] = '2.jpg';
image[2] = '3.jpg';
image[3] = '4.jpg';
let i = 0;

// const time = 5000;

function next() {
    i++;
    if (i > image.length - 1) {
        i = 0;
    }
    slideShow();
}

function previous() {
    i--;
    if (i < 0) {
        i = image.length - 1;
    }
    slideShow();
}

function slideShow() {
    document.slide.src = image[i];
    // if (i < image.length-1) {
    //     i++;
    // } else {
    //     i = 0;
    // }
    // setTimeout('slideShow()', time);

}