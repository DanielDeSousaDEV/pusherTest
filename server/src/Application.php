<?php

namespace SimpleApi;

use PDO;

class Application
{

  public function __construct(
    public PDO $Connection
  ) {}

  public function start()
  {
    $router = new Router();

    $router->create("GET", "/", function () {
      $query = 'SELECT * FROM users';
      $stmt = $this->Connection->prepare($query);
      $stmt->execute();

      while($data = $stmt->fetch()){
        var_dump($data);
      };
      
      return;
    });

    $router->create("POST", "/hello", function () {
      http_response_code(200);
      echo json_encode(["hello" => $_POST['value'] ?? 'não definido']);
      return;
    });

    $router->init();
  }
}
