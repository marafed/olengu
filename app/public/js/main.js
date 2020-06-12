function showPopup(id) {
    document.getElementById(id).style.display = "block";
}
function hidePopup(id) {
    document.getElementById(id).style.display = "none";
}

function validateLoginForm() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
      });
    }, false);
}






