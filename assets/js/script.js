// EJERCICIO 1 - BORDE IMAGEN

// const imagen= document.getElementById("imagen")
// const alt= document.getElementById("alternar")

// alt.addEventListener('click', (event){
//     if(imagen.classList.contains('borde')){
//         imagen.classList.add('borde')
//     } else {
//         imagen.classList.remove('borde')
//     }
// });



// EJERCICIO 2 - SUMAR stickers

const sticker1 = document.getElementById("sticker-uno")
const sticker2 = document.getElementById("sticker-dos")
const sticker3 = document.getElementById("sticker-tres")
const mensaje = document.getElementById("mensaje-revision")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const valor1 = Number(sticker1.value)
    const valor2 = Number(sticker2.value)
    const valor3 = Number(sticker3.value)

    const suma = valor1 + valor2 + valor3;
    
    if(suma <= 10){
        mensaje.innerHTML=`Llevas ${suma} stickers`;
    } else{
        alert('Llevas demasiados stickers')
        mensaje.innerHTML=`Llevas demasiados stickers (${suma})`;
    }

//    console.log(suma);
})


// EJERCICIO 3 - CONTRASEÑA NUMÉRICA


const num1 = document.getElementById("primero")
const num2 = document.getElementById("segundo")
const num3 = document.getElementById("tercero")
const formPass = document.getElementById("form-pass")
const msg = document.getElementById("msg-comprobacion")

formPass.addEventListener("submit",(event) => {
    event.preventDefault()

    const union = num1.value+num2.value+num3.value;

    if(union == "911"){
        alert("Password 1 CORRECTO")
        msg.innerHTML="Password 1 CORRECTO"
    } else if(union == "714"){
        alert("Password 2 CORRECTO")
        msg.innerHTML="Password 2 CORRECTO"
    } else{
        alert("Contraseña INCORRECTA, vuelve a intentarlo")
        msg.innerHTML="Contraseña INCORRECTA, vuelve a intentarlo"
    }

//   console.log(union)
})