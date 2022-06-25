
$("ul").click(function(ev){
    ev.stopPropagation();
  })


const form = document.getElementById ('form');
const parrafo = document.getElementById ('warnings');
let inputNombre = document.getElementById ('nombre');
let inputOpinion = document.getElementById ('opinion');
let btnEnviar = document.getElementById ('btnEnviar');

form.addEventListener ('submit', e=> {
    e.preventDefault ();
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = ""
 
if (inputNombre.value.length < 3) {
 warnings += ('¡El nombre es demasiado corto!');
 entrar = true; 
} else if (inputOpinion.value.length < 5) {
 warnings += ('¡Escriba una opinión de al menos 15 caracteres!');
 entrar = true;
} else if (entrar) {
 parrafo.innerHTML = warnings
} else {
  parrafo.innerHTML = Enviado
}
});
     
     
     