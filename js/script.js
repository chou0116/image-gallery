/** Setup for gallery **/
let _gallery = document.getElementById('gallery');

const pictures = [
    "audi-",
    "bentley-",
    "bmw-",
    "bugati-",
    "ferrari-",
    "maserati-",
    "mercedes-",
    "porsche-",
    "tesla-"
];


/* function for the gallery */
function buildGallery(images) {

    let _html = "";

    for (let _image of images) {
        let _alt = _image.substring(0, _image.lastIndexOf("-"));
        _html += '<img alt="' + _alt + '" class="image" src="img/' + _image + 'med.jpg">';
    }

    _gallery.innerHTML = _html;
};

buildGallery(pictures);

/*** creating the pop up pictures ****/


_gallery.addEventListener('click', function (e) {
    if (e.target.classList.contains('image')) {
        let _overlay = document.getElementById('overlay'),
            _modal = document.getElementById('modal'),
            img = e.target.getAttribute('src'),
            name = img.substring(0, img.lastIndexOf("-")),
            alt = e.target.getAttribute('alt');

        _modal.innerHTML = '<img alt="' + alt + '" class="image2" src="' + name + '-large.jpg">';
        _overlay.classList.add('visible');
    }
});

let _overlay = document.getElementById('overlay');

_overlay.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa')) {
        _overlay.classList.remove('visible');
    }
});

document.addEventListener('keyup', function (e) {
    if (e.which === 27) {
        _overlay.classList.remove('visible');
    }
});
