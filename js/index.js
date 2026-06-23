/* ============================================ */
/* ACORDEÓN DE TESTIMONIOS                      */
/* ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todos los botones de toggle
  var toggleButtons = document.querySelectorAll('.testimonial-toggle-btn');

  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Obtener el ID del texto objetivo
      var targetId = this.getAttribute('data-target');
      var textElement = document.getElementById(targetId);
      var icon = this.querySelector('i');
      var span = this.querySelector('span');

      if (!textElement) return;

      // Alternar la clase 'expanded'
      textElement.classList.toggle('expanded');

      // Cambiar el texto del botón y rotar el ícono
      if (textElement.classList.contains('expanded')) {
        span.textContent = 'Ver menos';
        icon.classList.add('rotated');
      } else {
        span.textContent = 'Ver más';
        icon.classList.remove('rotated');
      }
    });
  });
});

/* ============================================ */
/* PREGUNTAS FRECUENTES (ACORDEÓN)              */
/* ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  var faqQuestions = document.querySelectorAll('.faq-question');

  if (faqQuestions.length > 0) {
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        var answer = this.nextElementSibling;
        var icon = this.querySelector('.faq-icon');

        // Cerrar todas las demás respuestas
        document.querySelectorAll('.faq-answer').forEach(function(otherAnswer) {
          if (otherAnswer !== answer) {
            otherAnswer.classList.remove('active');
            var otherIcon = otherAnswer.previousElementSibling.querySelector('.faq-icon');
            if (otherIcon) {
              otherIcon.classList.remove('rotated');
            }
          }
        });

        // Alternar la respuesta actual
        answer.classList.toggle('active');
        icon.classList.toggle('rotated');
      });
    });
  }
});

/* ============================================ */
/* DROPDOWN DE BOOTSTRAP                        */
/* ============================================ */

$(document).ready(function() {
  // Inicializar los dropdowns
  $('.dropdown-toggle').dropdown();

  // Asegurar que el dropdown se cierre al hacer clic fuera
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.dropdown').length) {
      $('.dropdown-menu').removeClass('show');
    }
  });
});

