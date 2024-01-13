<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vueprueba";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Realiza las operaciones necesarias en la base de datos
$result = $conn->query("SELECT * FROM registrarp");

// Almacena los resultados en un array
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Imprime los resultados como JSON
echo json_encode($data);

// Cierra la conexión
$conn->close();
?>
