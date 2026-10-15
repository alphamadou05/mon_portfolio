const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        mainNav.classList.toggle("is-open", !isExpanded);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuToggle.focus();
        }
    });
}

const year = document.querySelector("#annee");
if (year) {
    year.textContent = String(new Date().getFullYear());
}
