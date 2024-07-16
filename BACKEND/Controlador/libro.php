<?php
require_once '../Modelo/libroDAO.php';

$funcion = $_GET['funcion'];

switch ($funcion) {

    case "agregar";
        agregar();
        break;

    case "eliminar";
        eliminar();
        break;
    case "obtener";
        obtener();
        break;
    case "editar";
        editar();
        break;
}
function obtener()
{
    $resultado = (new libro())->obtener();
    echo json_encode($resultado);
}
function agregar()
{
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->agregar($nombre , $fecha, $precio);
    echo json_encode($resultado);
}
function eliminar()
{
    $id = $_POST['id'];
    $resultado = (new libro())->eliminar($id);
    echo json_encode($resultado);
}


function editar()
{
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->editar($id, $nombre , $fecha, $precio);
    echo json_encode($resultado);
}