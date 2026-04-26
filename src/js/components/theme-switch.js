export function initThemeSwitch() {
    const button = document.getElementById("theme-toggle");
    const iconStatus = document.getElementById("theme-status-icon");
    const status = document.getElementById("theme-status");

    let theme = localStorage.getItem("theme");

    if (!theme) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        theme = prefersDark ? "dark" : "light";
    }

    applyTheme(theme);

    button.addEventListener("click", (event) => {
        theme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", theme);
        applyTheme(theme);
    })

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);

        if (theme === "dark") {
            iconStatus.textContent = "🌞";
            status.textContent = "Cambiar a claro";
        } else {
            iconStatus.textContent = "🌜";
            status.textContent = "Cambiar a oscuro";
        }
    }
}