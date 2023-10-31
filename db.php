<?php
$host = "localhost";
$dbname = "teste";
$usuario = "root";
$senha = "";
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão bem-sucedida!";
} catch (PDOException $e) {
    echo "Erro de conexão: " . $e->getMessage();
}
?>