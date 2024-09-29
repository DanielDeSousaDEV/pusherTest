<?php 
    require '../vendor/autoload.php';

    try {
        $fullDNS = $_ENV['DB_DRIVER'] . ':host=' . $_ENV['DB_URL'] . ';port=' . $_ENV['DB_PORT'] . ';dbname=' . $_ENV['DB_NAME'];

        $conn = new PDO(
            $fullDNS,
            $_ENV['DB_USER'],
            $_ENV['DB_PASSWORD']
        );

    } catch (PDOException $e) {
        echo '<strong>Erro no PDO:</strong>' . $e;
    }
