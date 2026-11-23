
// ==============================
// 1. AUTOMATIC FOOTER YEAR
// ==============================

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `&copy; ${new Date().getFullYear()} My Portfolio. All Rights Reserved.`;
}


// ==============================
// 2. NAVIGATION ACTIVE STATE
// ==============================

const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveMenu() {
    let currentSection = "home";

    document.querySelectorAll("main section[id]").forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}


// ==============================
// 3. NAVIGATION CLICK
// ==============================

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// ==============================
// 4. SCROLL EVENT
// ==============================

window.addEventListener("scroll", updateActiveMenu);

updateActiveMenu();


// ==============================
// 5. WEBSITE READY
// ==============================

console.log("Portfolio website berhasil dijalankan!");
