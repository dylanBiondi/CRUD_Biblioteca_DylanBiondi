window.onload = ()=>{
    
    obtenerLibro();
}
async function obtenerLibro(){
    let url= 'http://localhost/CRUD_Biblioteca_DylanBiondi/BACKEND/Controlador/libro.php?funcion=obtener'
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos);
    mostrarLibro(datos)

}
function mostrarLibro(libro){
    let tbodyElement = document.querySelector("#cuerpotabla")
    for(let i=0; i < libro.length;i++){
     tbodyElement.innerHTML+=`
     <tr>
        <td>${libro[i].id}</td>
        <td>${libro[i].nombre}</td>
        <td>${libro[i].fecha}</td>
        <td>${libro[i].precio}</td>
        </tr>
        `;
        
        
        
    }
}