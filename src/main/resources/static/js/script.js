// modal element 가져오기
const modal = document.getElementById("searchModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const closeModalBtn2 = document.getElementById("closeModal2");

// 열기 버튼 클릭
openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

// 닫기 버튼(X)
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 닫기 버튼(닫기)
closeModalBtn2.addEventListener("click", () => {
    modal.style.display = "none";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// -----------------------------
// 🌗 테마 전환 기능
// -----------------------------
const lightBtn = document.getElementById("lightMode");
const systemBtn = document.getElementById("systemMode");
const darkBtn = document.getElementById("darkMode");

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// 테마 적용 함수
function applyTheme(theme) {
    document.body.classList.remove("light-mode", "dark-mode");

    if (theme === "light") {
        document.body.classList.add("light-mode");
    } else if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else if (theme === "system") {
        if (mediaQuery.matches) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.add("light-mode");
        }
    }

    [lightBtn, systemBtn, darkBtn].forEach((btn) => btn.classList.remove("active"));
    if (theme === "light") lightBtn.classList.add("active");
    else if (theme === "system") systemBtn.classList.add("active");
    else if (theme === "dark") darkBtn.classList.add("active");

    localStorage.setItem("theme", theme);
}

// 시스템 테마 변경 자동 반영
mediaQuery.addEventListener("change", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "system") applyTheme("system");
});

// 초기 로드 시 테마 적용
const savedTheme = localStorage.getItem("theme") || "system";
applyTheme(savedTheme);

// 버튼 이벤트
lightBtn.addEventListener("click", () => applyTheme("light"));
systemBtn.addEventListener("click", () => applyTheme("system"));
darkBtn.addEventListener("click", () => applyTheme("dark"));
