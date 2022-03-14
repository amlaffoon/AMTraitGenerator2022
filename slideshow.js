let raceSlideshow = {
    images: [
        {
            src: "https://cdn.pixabay.com/photo/2020/10/08/00/33/orc-5636526_1280.png",
            alt: "Orc",
        },
        {
            src: "https://cdn.pixabay.com/photo/2021/09/03/22/23/elf-6596691_1280.png",
            alt: "Halfling",
        },
        {
            src: "https://www.maxpixel.net/static/photo/1x/People-Fantasy-Face-Male-Man-Guy-Elf-Model-5389055.png",
            alt: "Elf",
        },
        {
            src: "https://www.maxpixel.net/static/photo/1x/Fighter-Soldier-Man-Sword-Warrior-Armor-Fantasy-5636538.png",
            alt: "Human",
        },
    ],
    position: 0,
    elementId: "raceSlideshowImage",
};

let classSlideshow = {
    images: [
        {
            src: "https://cdn.pixabay.com/photo/2018/10/03/16/42/fantasy-3721894_1280.jpg",
            alt: "Warrior",
        },
        {
            src: "https://www.maxpixel.net/static/photo/1x/Mystical-Magic-Mysterious-Magician-Fantasy-Dragons-4423131.jpg",
            alt: "Mage",
        },
        {
            src: "https://www.maxpixel.net/static/photo/1x/Fantasy-Dark-Background-Crow-Warrior-Male-Woods-6480319.jpg",
            alt: "Ranger",
        },
        {
            src: "https://www.maxpixel.net/static/photo/1x/Wallpaper-Druid-Fairies-Magic-Fantasy-Mystical-3442618.jpg",
            alt: "Druid",
        },
    ],
    position: 0,
    elementId: "classSlideshowImage",
};



function next(slideshow) {
    slideshow.position += 1;
    if (slideshow.images.length <= slideshow.position) {
        slideshow.position = 0;
    }

    let nextImage = slideshow.images[slideshow.position]

    document.getElementById(slideshow.elementId).src = nextImage.src;

    document.getElementById(slideshow.elementId).alt = nextImage.alt;

    console.log(slideshow);
}

function previous(slideshow) {
    slideshow.position -= 1;

    console.log(slideshow.position);
    console.log(slideshow.images.length);

    if (slideshow.position < 0) {
        slideshow.position = slideshow.images.length - 1;
    }
    console.log(slideshow);

    let nextImage = slideshow.images[slideshow.position]

    document.getElementById(slideshow.elementId).src = nextImage.src;

    document.getElementById(slideshow.elementId).alt = nextImage.alt;
}


