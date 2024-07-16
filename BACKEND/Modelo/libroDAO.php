<?php
require_once '../conexion/conexion.php';

class libro
{

    function obtener()
    {
        $connection = connection();
        $sql = "SELECT * FROM libro ";
        $respuesta = $connection->query($sql);
        $libro = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libro;
    }
    public function agregar($nombre, $fecha, $precio){
        $sql = "INSERT INTO libro(nombre,fecha,precio) VALUES('$nombre' ,'$fecha', $precio);";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
    public function eliminar($id){
        $sql = "DELETE FROM libro WHERE id= $id;";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    public function editar($id,  $nombre, $fecha, $precio){
        $sql = "UPDATE libro SET nombre='$nombre', fecha='$fecha', precio = '$precio' WHERE id=$id";  
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
}