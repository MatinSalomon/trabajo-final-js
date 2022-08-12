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
    localStorage.setItem("datosRegistro", JSON.stringify(datosRegistro));
})});

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
        
        window.location.replace("../index.html");
    }else {
        
        console.log("Acceso denegado ");

    }
})});

salir.addEventListener('click', () =>{
    formulario.style.display = 'none'
    formRegistro.style.display = 'none'
    
})
