document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Detectar si la página se está cargando por una navegación nueva (no recarga)
    if (performance.navigation.type === 1) { 
        // Si es una recarga, mantener el modo oscuro si estaba activado
        if (sessionStorage.getItem("darkMode") === "enabled") {
            enableDarkMode();
        }
    } else {
        // Si es una nueva navegación, asegurarse de que inicie en modo claro
        sessionStorage.removeItem("darkMode");
        disableDarkMode();
    }

    // Función para activar el modo oscuro
    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        document.querySelector(".navbar").classList.add("dark-mode");
        document.querySelectorAll(".card").forEach(card => card.classList.add("dark-mode"));
        darkModeToggle.textContent = "Modo Claro";
        sessionStorage.setItem("darkMode", "enabled"); // Guarda el estado solo para la sesión
    }

    // Función para desactivar el modo oscuro
    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        document.querySelector(".navbar").classList.remove("dark-mode");
        document.querySelectorAll(".card").forEach(card => card.classList.remove("dark-mode"));
        darkModeToggle.textContent = "Modo Oscuro";
        sessionStorage.removeItem("darkMode"); // Elimina la configuración
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

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".experience-link .card");

    cards.forEach(card => {
        // En móviles: Ampliar mientras está presionado
        card.addEventListener("touchstart", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
        });

        // En móviles: Volver al estado original cuando se suelta
        card.addEventListener("touchend", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });
});






