// Remember the visitor's preferred colour theme.
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("abba-portfolio-theme");

if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
}

function updateThemeButton() {
    const isLight = document.documentElement.dataset.theme === "light";
    themeToggle.textContent = isLight ? "🌙" : "☀️";
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
}

updateThemeButton();

themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("abba-portfolio-theme", newTheme);
    updateThemeButton();
});
