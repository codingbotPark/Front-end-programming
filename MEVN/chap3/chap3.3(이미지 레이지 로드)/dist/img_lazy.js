// DOM 이 모두 로딩되었을 때 실행된다
document.addEventListener("DOMContentLoaded", function () {
  // 그냥 document.querySelector("img.lazy") 를 하면 NodeList가 된다(filter를 사용못함)
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false; // 플래그, 저화질 이미지를 버릴지 말지
  const lazyLoad = function () {
    if (active === false) {
      active = true;
      setTimeout(() => {
        lazyImages = lazyImages
          .map((lazyImage) => {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              window.getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              return null;
            } else return lazyImage;
          })
          .filter((image) => image); // null 거르기

        if (!lazyImages.length) {
          document.removeEventListener("scroll", lazyLoad);
        } else active = false;
      }, 200);
    }
  };
  document.addEventListener("scroll", lazyLoad);
});
