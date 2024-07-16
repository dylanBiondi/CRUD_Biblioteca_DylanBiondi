


window.onload = ()=>{
    modificarlibro
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
    let tbodyElement = document.querySelector("#TablaLibro")
    for(let i=0; i < libro.length;i++){
     tbodyElement.innerHTML+=`
     <tr>
        <td>${libro[i].id}</td>
        <td>${libro[i].nombre}</td>
        <td>${libro[i].fecha}</td>
        <td>${libro[i].precio}</td>
        <td><button onclick="cargardatos('${libro[i].id}','${libro[i].nombre}','${libro[i].fecha}','${libro[i].precio}')">selecionar</button></td>
        </tr>
        `;
        
        
    }
}


function cargardatos(id,nombre,fecha,precio) {

    let idInput = document.querySelector('#id');
    idInput.value = id;

    let nombreInput = document.querySelector('#nombre');
    nombreInput.value = nombre;

    let fechaInput = document.querySelector('#fecha');
    fechaInput.value = fecha;   

    let precioInput = document.querySelector('#precio');
    precioInput.value = precio;
}


function modificarlibro(ci){
    const libro = listadelibros.find(libro => libro.id === id);//
    

    document.querySelector("#id").value = libro.id;
    document.querySelector("#nombre").value = libro.nombre;
    document.querySelector("#fecha").value = libro.fecha;
    document.querySelector("#precio").value = libro.precio;   
    
}


async function editar(){
    let formElement = document.querySelector("#modificar")
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/CRUD_Biblioteca_DylanBiondi/BACKEND/Controlador/libro.php?funcion=editar"
  
        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        location.reload();
        console.log(datos);
        
  }
  }