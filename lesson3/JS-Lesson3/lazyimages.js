const imagesToLoad = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 1.0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const imgobserver = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          imgobserver.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
        imgobserver.observe(img);
    });
  } 

else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

 
  