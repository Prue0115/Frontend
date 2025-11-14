// -----------------------------
// 테마 전환
// -----------------------------
const lightBtn = document.getElementById("lightMode");
const systemBtn = document.getElementById("systemMode");
const darkBtn = document.getElementById("darkMode");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applyTheme = (theme) => {
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

    [lightBtn, systemBtn, darkBtn]
        .filter(Boolean)
        .forEach((btn) => btn.classList.remove("active"));

    if (theme === "light" && lightBtn) {
        lightBtn.classList.add("active");
    } else if (theme === "system" && systemBtn) {
        systemBtn.classList.add("active");
    } else if (theme === "dark" && darkBtn) {
        darkBtn.classList.add("active");
    }

    try {
        window.localStorage.setItem("theme", theme);
    } catch (error) {
        console.warn("테마 저장 중 오류", error);
    }
};

mediaQuery.addEventListener("change", () => {
    try {
        const savedTheme = window.localStorage.getItem("theme");
        if (savedTheme === "system") {
            applyTheme("system");
        }
    } catch (error) {
        console.warn("시스템 테마 동기화 중 오류", error);
    }
});

try {
    const savedTheme = window.localStorage.getItem("theme") || "system";
    applyTheme(savedTheme);
} catch (error) {
    applyTheme("system");
}

if (lightBtn) {
    lightBtn.addEventListener("click", () => applyTheme("light"));
}

if (systemBtn) {
    systemBtn.addEventListener("click", () => applyTheme("system"));
}

if (darkBtn) {
    darkBtn.addEventListener("click", () => applyTheme("dark"));
}
