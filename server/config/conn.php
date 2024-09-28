<?php 
    try {
        $fullDNS = $_ENV['DB_DNS'] . ';dbname=' . $_ENV['DB_NAME'];

        $conn = new PDO(
            $fullDNS,
            $_ENV['DB_USER'],
            $_ENV['DB_PASSWORD']
        );

    } catch (PDOException $e) {
        echo '<strong>Erro no PDO:</strong>' . $e;
    }
?>