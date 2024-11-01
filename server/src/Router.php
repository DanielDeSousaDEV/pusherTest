<?php

namespace SimpleApi;

class Router
{
  protected $routes = [];

  public function create(
    string $method, // Método HTTP.
    string $path, // URL/rota.
    callable $callback // Função executada nessa rota.
  ) {
    //tratamento para melhor desenvolvimento
    $method = strtoupper($method);

    $this->routes[$method][$path] = $callback;
  }

  public function init()
  {
    // Colocamos o content-type da resposta para JSON.
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: *");

    $httpMethod = $_SERVER["REQUEST_METHOD"];

    // O método atual existe em nossas rotas?
    if (isset($this->routes[$httpMethod])) {

      // Percore as rotas com o método atual:
      foreach ($this->routes[$httpMethod] as $path => $callback) {

        //limpa a url desconsiderando qualquer query param
        $urlWithQueryParams = $_SERVER["REQUEST_URI"];
        $cleanUrl = strtok($urlWithQueryParams, '?');

        // Se a rota atual existir, retorna a função...
        if ($path === $cleanUrl) {
          return $callback();
        }
      }
    };

    //se for uma requisição OPTIONS sempre retornaram um 200 
    if ($httpMethod === 'OPTIONS') {
      http_response_code(200);
      return json_encode([
        'pfv' => 'daCerto'
      ]);
    };

    // Caso não exista a rota/método atual: 
    http_response_code(404);
    return;
  }
}
