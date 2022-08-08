var arrSlide = [
    "slide1.jpg",
    "slide2.jpg",
    "slide3.jpg",
    "slide4.jpg",
    "slide5.jpg",
    "slide6.jpg",
    "slide7.jpg",
    "slide8.jpg",
    "slide9.jpg",
];

var i=0;
var vSlideImg = document.getElementById("myslide");
var t; // set interval - biến lặp
function fnext(){
    i++;
    if(i >= arrSlide.length) i = 0;
    vSlideImg.src = "./slides/" + arrSlide[i];
}

function fback(){
    i--;
    if(i >= arrSlide.length) i = 0;
    vSlideImg.src = "./slides/" + arrSlide[i];
}

function fStart(){
    t=window.setInterval(fnext, 2500);
}