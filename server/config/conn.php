<?php 
    require '../vendor/autoload.php';

    try {
        $options = [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ];

        $fullDNS = $_ENV['DB_DRIVER'] . ':host=' . $_ENV['DB_URL'] . ';port=' . $_ENV['DB_PORT'] . ';dbname=' . $_ENV['DB_NAME'];

        $conn = new PDO(
            $fullDNS,
            $_ENV['DB_USER'],
            $_ENV['DB_PASSWORD'],
            $options
        );

    } catch (PDOException $e) {
        echo '<strong>Erro no PDO:</strong>' . $e;
    }
