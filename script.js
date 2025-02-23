document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Mantener el modo oscuro después de recargar la página
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.querySelector(".navbar").classList.add("dark-mode");
        document.querySelectorAll(".card").forEach(card => card.classList.add("dark-mode"));
        darkModeToggle.textContent = "Modo Claro";
    }

    // Función para cerrar el menú en móviles si está abierto
    function closeMenu() {
        if (navbarCollapse.classList.contains("show")) {
            navbarToggler.click(); // Cierra el menú
        }
    }

    // Alternar el modo oscuro y cerrar el menú
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelector(".navbar").classList.toggle("dark-mode");
        document.querySelectorAll(".card").forEach(card => card.classList.toggle("dark-mode"));

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            this.textContent = "Modo Claro";
        } else {
            localStorage.setItem("darkMode", "disabled");
            this.textContent = "Modo Oscuro";
        }

        setTimeout(closeMenu, 300); // Cierra el menú con un ligero retraso
    });

    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setTimeout(closeMenu, 300); // Cierra el menú con un ligero retraso
        });
    });
});





