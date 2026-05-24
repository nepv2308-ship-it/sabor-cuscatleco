// INTERACCIÓN DOM: Menú Hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar el menú automáticamente al hacer clic en un enlace (en móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// VALIDACIÓN DE FORMULARIO
const formReserva = document.getElementById('form-reserva');

formReserva.addEventListener('submit', function (e) {
    e.preventDefault(); // Detener el envío por defecto

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const personas = document.getElementById('personas').value;

    // Validación de campos vacíos
    if (nombre === "" || email === "" || personas === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // Validación de correo electrónico estructurado
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Validación numérica
    if (personas <= 0) {
        alert("El número de personas debe ser mayor a 0.");
        return;
    }

    // Éxito
    alert(`¡Gracias, ${nombre}! Tu reserva para ${personas} personas ha sido procesada con éxito.`);
    formReserva.reset(); // Limpiar campos
});