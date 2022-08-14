const d = document;
const btnFormRegi= d.getElementById('btnFormRegi')
const formRegistro = d.getElementById('formularioRegistro')


btnFormRegi.addEventListener('click', () => {
    formRegistro.style.display = 'block'
formRegistro.addEventListener('submit', (e) => {

    e.preventDefault();

    const nombre = d.getElementById('nombre').value;
    const apellido = d.getElementById('apellido').value;
    const num = d.getElementById('num').value;
    const emailRegistro = d.getElementById('emailRegistro').value;
    const passwordRegistro = d.getElementById('passwordRegistro').value;

    const datos = {
        nombre, 
        apellido,
        num,
        emailRegistro,
        passwordRegistro
    }

    const datosRegistro = [];

    datosRegistro.push(datos);
    
    if(emailRegistro.length > 0 && emailRegistro.includes ('@') && emailRegistro.includes('.')) {
       localStorage.setItem("datosRegistro", JSON.stringify(datosRegistro));

     Swal.fire({
        title: 'Exito!',
        text: 'Registro exitoso',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

    }else {
        Swal.fire({
            title: 'ERROR!',
            text: 'Email no valido',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
}})})

const btnForm = d.getElementById('btnForm')
const formulario = document.getElementById('formulario')

btnForm.addEventListener('click', () => {
    formulario.style.display = 'block'
    formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    const datosRegistroS = JSON.parse(localStorage.getItem("datosRegistro"));
    

    const email = d.getElementById("email").value;
    const password = d.getElementById("password").value;

    if(email == datosRegistroS[0].emailRegistro && password == datosRegistroS[0].passwordRegistro){
        
        window.location.replace("main.html");
    }else {

        Swal.fire({
            title: 'ERROR!',
            text: 'Email o contraseña incorrectos',
            icon: 'error',
            confirmButtonText: 'Cool'
          })

    }
})});

const salir2 = d.getElementsByClassName('salir2')[0]
salir2.addEventListener('click', () => {
    formRegistro.style.display = 'none'
})

const salir = d.getElementsByClassName("salir")[0]
salir.addEventListener('click', () => {
    formulario.style.display = 'none'
})
