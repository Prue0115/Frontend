// -----------------------------
// 고급검색 모달
// -----------------------------
const modal = document.getElementById("searchModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const closeModalBtn2 = document.getElementById("closeModal2");

if (openModalBtn && modal) {
    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
    });
}

[closeModalBtn, closeModalBtn2].forEach((btn) => {
    if (btn && modal) {
        btn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
});

if (modal) {
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// -----------------------------
// 검색 탭 전환
// -----------------------------
const searchTabs = document.querySelectorAll(".search-tab");
const searchInput = document.getElementById("mainSearchInput");

if (searchTabs.length > 0 && searchInput) {
    searchTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            searchTabs.forEach((button) => {
                button.classList.remove("active");
                button.setAttribute("aria-selected", "false");
            });

            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");

            const placeholder = tab.dataset.placeholder;
            if (placeholder) {
                searchInput.placeholder = placeholder;
            }
        });
    });
}
