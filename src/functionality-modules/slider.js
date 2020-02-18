const slider = document.getElementById('slider');

const convertScrollToWidth = (scroll) =>
  scroll / document.body.offsetHeight * window.innerWidth;

export default function initSlider (){
  let timeout = null;

  window.addEventListener('scroll', () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        slider.style.width = `${convertScrollToWidth(
          window.scrollY +
            window.scrollY /
              (document.body.offsetHeight - window.innerHeight) *
              window.innerHeight
        )}px`;
        timeout = null;
      }, 15);
    }
  });
}
