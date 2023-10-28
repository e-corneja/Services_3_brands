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
  ////////////////////  SHOW MORE BTN ////////////////////////

  const showBtn = document.querySelector(".brands__btn");
  const container = document.querySelector(".swiper-wrapper");
  const list = document.querySelectorAll(".swiper-slide");
  const element = document.querySelector(".swiper-slide");
  const icon = showBtn.querySelector(".icon-expand");

  let elemInTwoRows = calculateVisibleElementsInRow() * 2;

  function calculateVisibleElementsInRow() {
    const containerWidth = container.clientWidth;
    const elementWidth = element.clientWidth;
    const columnGap = parseInt(window.getComputedStyle(container).columnGap);

    let elementsInRow = Math.floor(
      (containerWidth + columnGap) / (elementWidth + columnGap)
    );

    return elementsInRow;
  }

  for (let i = list.length - elemInTwoRows; i > 0; i--) {
    list[i].classList.add("hide");
    console.log(list[i]);
  }

  showBtn.addEventListener("click", function () {
    for (let i = list.length - elemInTwoRows; i > 0; i--) {
      list[i].classList.toggle("hide");
      showBtn.classList.toggle("brands__btn--hide");
    }
    if (showBtn.classList.contains("brands__btn--hide")) {
      icon.style.transform = "rotate(180deg)";
    }
    if (!showBtn.classList.contains("brands__btn--hide")) {
      icon.style.transform = "rotate(0deg)";
    }
  });
}
