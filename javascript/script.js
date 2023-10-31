////////////////////  SWIPER ////////////////////////
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);
      };

      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };

      breakpoint.addEventListener("change", checker);
      checker();
    };

    resizableSwiper("(max-width: 767px)", ".swiper", {
      speed: 300,
      spaceBetween: 16,
      slidesPerView: 1.3,
      pagination: {
        el: ".swiper__pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        420: {
          slidesPerView: 1.6,
        },
        480: {
          slidesPerView: 2,
        },
        574: {
          slidesPerView: 2.5,
        },
        654: {
          slidesPerView: 3,
        },
      },
    });
  });
}
////////////////////  SHOW MORE BTN ////////////////////////

const showBtn = document.querySelector(".brands__btn");
const container = document.querySelector(".swiper-wrapper");
const icon = showBtn.querySelector(".brands__icon-expand");
const btnText = document.querySelector(".btn-text");

showBtn.addEventListener("click", function () {
  container.classList.toggle("swiper-wrapper--opened");
  icon.style.transform = "rotate(180deg)";

  if (container.classList.contains("swiper-wrapper--opened")) {
    icon.style.transform = "rotate(180deg)";
    btnText.textContent = "Скрыть";
  }
  if (!container.classList.contains("swiper-wrapper--opened")) {
    icon.style.transform = "rotate(0deg)";
    btnText.textContent = "Показать все";
  }
});
