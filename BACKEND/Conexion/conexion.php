<?php
function connection()
{
    $host = "localhost";
    $bd = "biblioteca";
    $usuario = "root";
    $password = "";
    $puerto = "3306";
    $mysqli = new mysqli($host, $usuario, $password, $bd, $puerto);
    return $mysqli;
}