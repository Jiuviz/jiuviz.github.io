document.addEventListener('DOMContentLoaded',function(){
    console.log('Hello, wold!');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var form = document.getElementById('tuFormulario');


    console.log(inputEmail);
    console.log(inputPassword);

    form.addEventListener('submit', function (event) {
        if (inputPassword.value.length < 8) 
        {
            alert('La contraseña debe tener al menos 8 caracteres.');
            event.preventDefault(); 
            return;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail.value)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            event.preventDefault(); 
            return;
        }
    });
});