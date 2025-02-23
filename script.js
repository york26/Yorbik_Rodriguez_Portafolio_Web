document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Comprobar si el modo oscuro está activado en la sesión actual
    if (sessionStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }

    // Función para activar el modo oscuro
    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        document.querySelector(".navbar").classList.add("dark-mode");
        document.querySelectorAll(".card").forEach(card => card.classList.add("dark-mode"));
        darkModeToggle.textContent = "Modo Claro";
        sessionStorage.setItem("darkMode", "enabled"); // Guarda en sessionStorage
    }

    // Función para desactivar el modo oscuro
    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        document.querySelector(".navbar").classList.remove("dark-mode");
        document.querySelectorAll(".card").forEach(card => card.classList.remove("dark-mode"));
        darkModeToggle.textContent = "Modo Oscuro";
        sessionStorage.removeItem("darkMode"); // Elimina el modo oscuro al cerrar
    }

    // Alternar modo oscuro al hacer clic
    darkModeToggle.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
        setTimeout(closeMenu, 300); // Cierra el menú si está abierto
    });

    // Cerrar el menú al hacer clic en una opción
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setTimeout(closeMenu, 300);
        });
    });

    // Función para cerrar el menú en móviles
    function closeMenu() {
        if (navbarCollapse.classList.contains("show")) {
            navbarToggler.click();
        }
    }
});






