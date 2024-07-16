    window.onload =()=>{
        obtenerLibros()
    }

async function obtenerLibros(){
    let url ="http://localhost/CRUD_Biblioteca_DylanBiondi/BACKEND/Controlador/libro.php?funcion=obtener";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    mostrarLibro(datos) 

}

function mostrarLibro(libro){
    let tbodyElement = document.querySelector("#cuerpotablaEliminar")
    tbodyElement.innerHTML=""
    for(let i=0; i < libro.length;i++){
    tbodyElement.innerHTML+=`
    <tr>
        <td>${libro[i].id}</td>
        <td>${libro[i].nombre}</td>
        <td>${libro[i].fecha}</td>
        <td>${libro[i].precio}</td>
        <td><button onclick="eliminarlibro('${libro[i].id}')">eliminar</button></td>
        </tr>
        `;
    }
}
async function eliminarlibro(id){
    let formdata = new FormData();
    formdata.append("id",id);
    let  url='http://localhost/CRUD_Biblioteca_DylanBiondi/BACKEND/controlador/libro.php?function=eliminar';      
        
        let config = {
            method: 'POST',
            body: formdata
        };

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();

        if(datos){
            alert("libro eliminado")
        obtenerlibro()    
        }else{
            alert("libro eliminado")
        }
}

