const hipo = document.getElementById("hipo");

function ponernumeros() {
    hipo.innerHTML = "";
    const divnumeros = document.createElement("button");
    divnumeros.classList.add("cssbotonelegir");
    divnumeros.innerHTML = "Hacer Elección";
    hipo.appendChild(divnumeros);

    divnumeros.addEventListener('click',()=>{iniciarCuentaRegresiva(divnumeros)});
}
function iniciarCuentaRegresiva(button)
 { let contador = 5; const countdown =
     document.getElementById("countdown"); countdown.innerHTML = ""; 
     countdown.classList.add("cssregresiva");
      const intervalo = setInterval(() => {
         if (contador >= 0) { 
        countdown.innerHTML = "Cuenta regresiva: " + contador; contador--; } 
         else { clearInterval(intervalo); 
         countdown.innerHTML = ""; button.innerHTML = "Hacer Elección"; jugar(); } }, 1000); }

         const eleccion = document.getElementById('userInput');
         eleccion.classList.add("cssdetalles") 
function jugar() {
   const valor = parseInt(eleccion.value); 
    const eleccionComputadora = Math.floor(Math.random() * 3) + 1; 

    let resultadotexto= '';

    const nombrepromesa2 = new Promise((resolve) => 
        {
        setTimeout(() => {
            if(valor===NaN){alert("EL NÚMERO 0 NO ES PERMITIDO,DEBES ELEGIR 1,2 Ó 3");resultadotexto=("numero invalidado")} 
            else if(valor === eleccionComputadora) {
                resultadotexto = ("¡Enhorabuena,Salvaste el mundo! tu numero "+ valor + " es igual que el numero " + eleccionComputadora);
            }
             else {resultadotexto=("PERDISTE, tu numero "+ valor + " NO es igual que el numero " + eleccionComputadora);}
            
            console.log("Tu elección: " + valor); 
            console.log("Elección de la computadora: " + eleccionComputadora); 
            let resultado=document.getElementById("result");
            resultado.innerHTML=resultadotexto
            resultado.classList.add("cssletras")
            resultado.innerHTML()
        
            resolve(resultadotexto);
        }, 1000);
        }); 

        nombrepromesa2.then((valor) => {
        console.log(valor);
        });
}
let boton=document.getElementById("restart");
boton.classList.add("reset")
boton.addEventListener("click",()=>{
    document.getElementById("userInput").value = ""; 
    document.getElementById("countdown").innerHTML = ""; 
    document.getElementById("result").innerHTML = ""; 
   
 })

ponernumeros();

