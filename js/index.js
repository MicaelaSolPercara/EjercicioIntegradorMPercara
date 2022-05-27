const form=document.getElementById ('form');
const parrafo=document.getElementById ('warnings');
let inputNombre=document.getElementById ('nombre');
let inputOpinion=document.getElementById ('opinion');
let btnEnviar=document.getElementById ('btnEnviar');

form.addEventListener ('submit', e=> {
    e.preventDefault ();
    let warnings="";
    let entrar=false
    parrafo.innerHTML =""
 
if (inputNombre.value.length<3); {
 warnings+= `¡El nombre es demasiado corto!`;
 entrar=true; 
}
if (inputOpinion.value.length < 5); {
warnings+= `¡Escriba una opinión de al menos 15 caracteres! <br>`;
 entrar=true;
 }
 if (entrar) {
 parrafo.innerHTML = warnings
}
else {parrafo.innerHTML=Enviado}

});
     
     
     