if(password.length<6){
mensaje.innerHTML=" La contrasena debe tener al menos 6 caracteres";
mensaje.className="error";
return;
}

if(password!==password2){
mensaje.innerHTML=" Las contrasenas no coinciden";
mensaje.className="error";
return;
}

mensaje.innerHTML=" Registro completado correctamente";
mensaje.className="ok";
let llueve=confirm("Gracias por enviar tu formulario")