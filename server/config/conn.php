<?php 
    try {
        $conn = new PDO($_ENV['DB_DNS'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']);
    } catch (PDOException $e) {
        echo '<strong>Erro no PDO:</strong>' . $e;
    }
?>