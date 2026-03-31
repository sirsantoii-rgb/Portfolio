// Inicializar animaciones de Scroll
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 200,
    reset: false
});

sr.reveal('.reveal');
sr.reveal('.reveal-delayed', { delay: 400 });

// Marcar menús activos al hacer scroll
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section, header, footer");
    const navItems = document.querySelectorAll(".nav-item");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
});

/* ----------------------TRABAJOS---------------------- */
// Iluminar el botón de filtro seleccionado
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.style.background = 'none');
        this.style.background = 'var(--accent)';
    });
});

/* -------------------------Contactos---------------------------- */
// --- CONFIGURACIÓN EMAILJS ---
(function(){
    emailjs.init("-Z0Rv_lWNyWhWv1LI");
})();

const contactForm = document.getElementById("contact-form");

if(contactForm) {
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        
        // Cambiar texto del botón para feedback visual
        const btn = this.querySelector(".submit-btn");
        const originalText = btn.innerText;
        btn.innerText = "ENVIANDO...";

        emailjs.sendForm(
            "service_67b83pw",
            "template_qr6uy4e",
            this
        ).then(function(){
            alert("¡Mensaje enviado con éxito, Gabriel se pondrá en contacto pronto!");
            contactForm.reset();
            btn.innerText = originalText;
        }, function(error){
            alert("Error al enviar el mensaje. Por favor, intenta por WhatsApp.");
            btn.innerText = originalText;
        });
    });
}

// Re-activar animaciones de scroll para la nueva página
ScrollReveal().reveal('.reveal', { distance: '50px', duration: 1000 });
ScrollReveal().reveal('.reveal-delayed', { delay: 400, distance: '50px' });