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

    $router->create("GET", "/hello", function () {
      http_response_code(200);
      echo json_encode(["hello" => $_GET['value'] ?? 'não definido']);
      return;
    });

    $router->init();
  }
}
