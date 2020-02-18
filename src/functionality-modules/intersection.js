const observer = new IntersectionObserver(componentScrolled);

const components = document.getElementsByClassName('scroll-to-view');

function loadImage (image, src){
  const imageTemp = new Image();
  imageTemp.src = src;
  imageTemp.onload = function (){
    image.src = imageTemp.src;
    image.classList.remove('placeholder');
    image.classList.add('loaded');
  };
}

function componentScrolled (entries){
  entries.forEach((element) => {
    if (element.isIntersecting) {
      const { src } = element.target.dataset;
      if (src && element.target.tagName === 'IMG') {
        loadImage(element.target, src);
      }
      element.target.classList.add('is-visible');
    } else {
      element.target.classList.remove('is-visible');
    }
  });
}

export default function initIntersection (){
  Array.from(components).forEach((component) => observer.observe(component));
}
