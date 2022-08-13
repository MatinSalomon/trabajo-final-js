const d = document;
const btnFormRegi= d.getElementById('btnFormRegi')
const formRegistro = d.getElementById('formularioRegistro')

const salir = d.getElementById('salir')



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
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

    }else {
        Swal.fire({
            title: 'ERROR!',
            text: 'Do you want to continue',
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
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })

    }
})});

salir.addEventListener('click', () =>{
    formulario.style.display = 'none'
    formRegistro.style.display = 'none'
    
})
