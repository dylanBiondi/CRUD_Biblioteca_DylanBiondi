window.onload = () => {
    let formElement = document.querySelector("#formulario");
    console.log(formElement);
    formElement.onsubmit = async (e) => {
        e.preventDefault();
        let fromFormData = new FormData(formElement);
        let  url='http://localhost/CRUD_Biblioteca_DylanBiondi/BACKEND/controlador/libro.php?function=agregar';      
        
        let config = {
            method: 'POST',
            body: fromFormData
        };

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();

        console.log(datos);

        if(datos==true){
            alert('correcto')
        }else(
            alert('incorrecto')
        )
    }
}
