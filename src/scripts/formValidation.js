// Validación del formulario de aplicación laboral con expresiones regulares
export function initJobApplicationForm() {
    const form = document.getElementById('jobApplicationForm');
    if (!form) return;

    // Expresiones regulares
    const regex = {
        // Solo letras, espacios, acentos y caracteres especiales del español (ñ, á, é, etc.)
        fullName: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/,
        // Email válido
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        // Teléfono Honduras: exactamente 8 dígitos permitiendo espacios/guiones/paréntesis
        phone: /^[\d\s\-()]{8,12}$/,
        // Puesto: letras, números, espacios y algunos caracteres especiales
        position: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,\-/]{3,50}$/,
        // Mensaje: mínimo 20 caracteres
        message: /^.{20,500}$/
    };

    // Mensajes de error personalizados
    const errorMessages = {
        fullName: 'El nombre debe contener solo letras (sin números) y tener entre 3-50 caracteres',
        email: 'Ingresa un correo electrónico válido (ejemplo@correo.com)',
        phone: 'Ingresa un teléfono hondureño válido (8 dígitos, puede incluir guiones o espacios)',
        position: 'El puesto debe tener entre 3-50 caracteres',
        message: 'El mensaje debe tener entre 20-500 caracteres'
    };

    // Validar campo individual
    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        const errorSpan = field.parentElement.querySelector('.error-message');
        const value = field.value.trim();

        // Validación especial para teléfono (solo dígitos sin formato)
        if (fieldId === 'phone') {
            const phoneDigits = value.replace(/[\s\-()]/g, '');
            if (!/^\d{8}$/.test(phoneDigits)) {
                showError(field, errorSpan, errorMessages[fieldId]);
                return false;
            }
        } else if (!regex[fieldId].test(value)) {
            showError(field, errorSpan, errorMessages[fieldId]);
            return false;
        }

        clearError(field, errorSpan);
        return true;
    }

    // Mostrar error
    function showError(field, errorSpan, message) {
        field.style.borderColor = '#ff2c15';
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
    }

    // Limpiar error
    function clearError(field, errorSpan) {
        field.style.borderColor = '#d9d9d9';
        errorSpan.style.display = 'none';
    }

    // Validar en tiempo real mientras el usuario escribe
    ['fullName', 'email', 'phone', 'position', 'message'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        
        // Prevenir números en el campo de nombre
        if (fieldId === 'fullName') {
            field.addEventListener('input', function(e) {
                // Eliminar números del valor
                this.value = this.value.replace(/[0-9]/g, '');
            });
        }

        // Validar cuando pierde el foco
        field.addEventListener('blur', function() {
            if (this.value.trim()) {
                validateField(fieldId);
            }
        });

        // Limpiar error cuando empieza a escribir
        field.addEventListener('input', function() {
            const errorSpan = this.parentElement.querySelector('.error-message');
            if (errorSpan.style.display === 'block') {
                clearError(this, errorSpan);
            }
        });
    });

    // Validar formulario completo al enviar
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const fields = ['fullName', 'email', 'phone', 'position', 'message'];
        
        fields.forEach(fieldId => {
            if (!validateField(fieldId)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Aquí puedes agregar la lógica para enviar el formulario
            alert('¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.');
            form.reset();
        } else {
            // Scroll al primer error
            const firstError = form.querySelector('.error-message[style*="display: block"]');
            if (firstError) {
                firstError.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}
