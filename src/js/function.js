// shit + alt + f -> para aplicar formato (identacion de las lineas de codigo)
//escribir por consola de desarrollador
console.log("Succes connect with HTML");

// Funciones en JavaScript
    /*  function nombreFuncion(){
            instrucciones
        }
    */
function showMessage(){
    console.log("Succes connect with HTML");
    //capturar el nombre que ingresa el usuario
    const input_user_name = document.getElementById("user_name").value;
    //mostrar por consola el valor capturadao del input 
    console.log(input_user_name);
    //capturar el valor ingresado como apellido
    const input_user_lastname = document.getElementById("user_lastname").value;
    //mostrar por consola el valor capturado del input
    console.log(input_user_lastname);
    const input_user_age = document.getElementById("user_age").value;
    //mostrar por consola el valor capturado del input
    console.log(input_user_age);
    const input_user_email = document.getElementById("user_email").value;
    //mostrar por consola el valor capturado del input
    console.log(input_user_email);
}