<?php

namespace SimpleApi;

class Application
{
  public function start()
  {
    $router = new Router();

    $router->create("GET", "/", function () {
      http_response_code(200);
      echo json_encode(["daniel" => 'de sousa']);
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
