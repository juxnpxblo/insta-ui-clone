class FadeStackedImages {
  constructor(imagesParentElem, delay) {
    this.images = imagesParentElem.children;
    this.delay = delay;
    this.maxImgIndex = this.images.length - 1;
    this.firstImg = this.images[this.maxImgIndex];
    this.secondImg = this.images[this.maxImgIndex - 1];
    this.lastImg = this.images[0];
    this.i = this.maxImgIndex;
  }

  fading() {
    if (this.i === this.maxImgIndex) {
      this.lastImg.classList.remove('z-10');
    }

    this.images[this.i].classList.remove('show');
    this.i - 2 >= 0 && this.images[this.i - 2].classList.add('show');

    if (this.i === 0) {
      this.lastImg.classList.add('z-10');
      this.firstImg.classList.add('show');
      this.secondImg.classList.add('show');
    }

    this.i--;

    if (this.i < 0) {
      this.i = this.maxImgIndex;
    }
  }

  startFading() {
    setInterval(() => {
      this.fading();
    }, this.delay);
  }
}

export default FadeStackedImages;
