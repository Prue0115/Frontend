// -----------------------------
// 행사 하이라이트 슬라이더
// -----------------------------
const highlightItems = document.querySelectorAll(".highlight-item");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");

if (highlightItems.length > 0) {
    let currentIndex = 0;
    let autoSlideTimer = null;

    const activateSlide = (index) => {
        highlightItems.forEach((item, itemIndex) => {
            item.classList.toggle("active", itemIndex === index);
        });
        currentIndex = index;
    };

    const showNext = () => {
        const nextIndex = (currentIndex + 1) % highlightItems.length;
        activateSlide(nextIndex);
    };

    const showPrev = () => {
        const prevIndex = (currentIndex - 1 + highlightItems.length) % highlightItems.length;
        activateSlide(prevIndex);
    };

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            showNext();
            restartAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            showPrev();
            restartAutoSlide();
        });
    }

    const startAutoSlide = () => {
        autoSlideTimer = window.setInterval(showNext, 7000);
    };

    const stopAutoSlide = () => {
        if (autoSlideTimer) {
            window.clearInterval(autoSlideTimer);
            autoSlideTimer = null;
        }
    };

    const restartAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    highlightItems.forEach((item) => {
        item.addEventListener("mouseenter", stopAutoSlide);
        item.addEventListener("mouseleave", startAutoSlide);
    });

    activateSlide(currentIndex);
    startAutoSlide();
}
