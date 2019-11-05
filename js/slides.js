var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

}
//modal image




function modal(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

//list drop down services
function DropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('nav-link')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    //validation Form
function validar() {
    var nombre, apellidos, dni, email, telefono, contraseña;
    nombre = document.getElementById('nombre').value;
    apellidos = document.getElementById('apellidos').value;
    email = document.getElementById('email').value;
    contraseña = document.getElementById('contraseña').value;

    expresionRegular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (nombre == "" || apellidos == "" || email == "" || contraseña == "" || telefono == "" || dni == "") {
        alert("Todos los campos tiene que estar rellenado ");
        return false;
    } else if (nombre.length > 30) {
        alert("nombre es muy largo");
        return false;
    } else if (apellidos.length > 80) {
        alert("apellidos es muy largo");
        return false;

    } else if (email.length > 100) {
        alert("el correo es muy largo");
        return false;

    } else if (!expresionRegular.test(email) == true) {
        alert("el email no es valido");

    } else if (telefono.length >= 9) {
        alert("teléfono es muy largo");
        return false;
    } else if (isNaN(telefono)) {
        alert("	El teléfono ingresado no es un número");
    } else if (usuario.length > 20 || contraseña.length > 20 || repetircontraseña.length > 20) {
        alert("El usuario y la contraseña solo deben tener 20 carateres");
        return false;
    }
}