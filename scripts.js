// Mostrar mensaje de confirmación al enviar el formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.";
    confirmationMessage.style.color = "#003366";
    confirmationMessage.style.fontSize = "1.1em";
    confirmationMessage.style.marginTop = "1em";
    confirmationMessage.style.textAlign = "center";
    confirmationMessage.style.opacity = "0";  // Iniciar invisible para animación
    confirmationMessage.style.transition = "opacity 0.5s ease";  // Animación de aparición
    form.appendChild(confirmationMessage);
    setTimeout(() => { confirmationMessage.style.opacity = "1"; }, 10);  // Iniciar animación
    submitButton.disabled = true;
    form.reset();
    setTimeout(() => {
        confirmationMessage.style.opacity = "0";  // Desvanecer mensaje
        setTimeout(() => { confirmationMessage.remove(); }, 500);  // Eliminar después de desvanecer
        submitButton.disabled = false;
    }, 5000);
});
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeText.textContent = "Modo Claro";
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeText.textContent = "Modo Oscuro";
    }
});
