const modal = document.getElementById("searchModal");
const openModalBtn = document.getElementById("openModal");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const firstField = document.getElementById("advTitle");

const setModalVisibility = (show) => {
    if (!modal) {
        return;
    }

    modal.setAttribute("aria-hidden", show ? "false" : "true");
    modal.style.display = show ? "block" : "none";

    if (show && firstField) {
        window.setTimeout(() => firstField.focus(), 50);
    }
};

if (openModalBtn && modal) {
    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        setModalVisibility(true);
    });
}

closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => setModalVisibility(false));
});

if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            setModalVisibility(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
            setModalVisibility(false);
        }
    });
}
