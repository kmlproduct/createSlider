var sliderImages = Array.from(document.querySelectorAll('.container-slider img'));
var slideCount = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById('slider-number');
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


for (var i = 1; i <= slideCount; i++) {
    ItemPagination = document.createElement('li');
    ItemPagination.setAttribute('data-index', i);
    ItemPagination.appendChild(document.createTextNode(i));
    paginationElement.appendChild(ItemPagination);

};
document.getElementById('indicators').appendChild(paginationElement);
var getPaginationUl = document.getElementById('pagination-ul');
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}
theChecker();
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
};

function theChecker() {
    slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of' + (slideCount);
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add('active');
    getPaginationUl.children[currentSlide - 1].classList.add('active');
    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    if (currentSlide == slideCount) {
        nextButton.classList.add('disabled');

    } else {
        nextButton.classList.remove('disabled')
    }

}

function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active')
    })
}