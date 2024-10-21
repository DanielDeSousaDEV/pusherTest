<?php

namespace SimpleApi;

use Exception;
use PDO;

class Application
{

  public function __construct(
    public PDO $Connection
  ) {}

  public function start()
  {
    $router = new Router();

    //USERS
    $router->create("GET", "/users", function () {
      $query = 'SELECT * FROM users';

      if (isset($_GET['id'])) {
        $query .= ' WHERE id = ' . $_GET['id'];
      }

      $stmt = $this->Connection->prepare($query);
      $stmt->execute();

      $data = [];
      while($dataUser = $stmt->fetch()){
        $data[] = $dataUser;
      };

      //cada venda
      $data = array_map(function ($user){
        $queryFKSales = 'SELECT * FROM sales WHERE id_user = :userId';

        $stmtFkSales = $this->Connection->prepare($queryFKSales);
        $stmtFkSales->bindParam(':userId', $user['id'], PDO::PARAM_INT);

        $stmtFkSales->execute();

        while($dataFKSalesFecth = $stmtFkSales->fetch()){
          $user['sales'][] = $dataFKSalesFecth;
        };
        
        return $user;
      }, $data);

      //cada produto
      $data = array_map(function ($user){
        $queryFKProducts = 'SELECT * FROM products WHERE id_user = :userId';

        $stmtFkProducts = $this->Connection->prepare($queryFKProducts);
        $stmtFkProducts->bindParam(':userId', $user['id'], PDO::PARAM_INT);

        $stmtFkProducts->execute();

        while($dataFKProductsFecth = $stmtFkProducts->fetch()){
          $user['products'][] = $dataFKProductsFecth;
        };

        return $user;
      }, $data);

      echo json_encode($data,JSON_PRETTY_PRINT);
      
      return;
    });

    $router->create('POST', '/users', function () {

      $userName = $_POST['name'] ?? null;
      $userEmail = $_POST['email'] ?? null;

      $userName = trim($userName);
      $userEmail = trim($userEmail);

      $dados = file_get_contents("php://input");
      
      if (!$userName || !$userEmail) {
        echo json_encode([
          'erro' => 'invalid data'
        ]);

        return;
      };
      
      try {
        $query = 'INSERT INTO users (name, email) VALUES (:userName, :userEmail)';
        $stmt = $this->Connection->prepare($query);
        $stmt->bindParam(':userName', $userName, PDO::PARAM_STR);
        $stmt->bindParam(':userEmail', $userEmail, PDO::PARAM_STR);
  
        $stmt->execute();
  
        http_response_code(201);
        echo json_encode([
          'response' => 'usuario criado com sucessso'
        ]);
      }catch (Exception $e) {
        echo json_encode([
          'response' => 'Ocorreu algum erro',
          'erro' => $e->getMessage(),
          'post' => $_POST,
          'get' => $_GET,
          'php://input' => $dados,
          'stmt' => $stmt,
        ]);
      }

      return;

    });

    //PRODUCTS
    $router->create("GET", "/products", function () {
      $query = 'SELECT * FROM products';

      if (isset($_GET['id'])) {
        $query .= ' WHERE id = ' . $_GET['id'];
      }

      $stmt = $this->Connection->prepare($query);
      $stmt->execute();

      $data = [];
      while($dataFecth = $stmt->fetch()){
        $data[] = $dataFecth;
      };

      //dono do produto
      $data = array_map(function ($product){
        $queryFKUser = 'SELECT * FROM users WHERE id = :userId LIMIT 1';

        $stmtFkUser = $this->Connection->prepare($queryFKUser);
        $stmtFkUser->bindParam(':userId', $product['id_user'], PDO::PARAM_INT);

        $stmtFkUser->execute();

        unset($product['id_user']);
        
        while($dataFKUserFecth = $stmtFkUser->fetch()){
          $product['user'] = $dataFKUserFecth;
        };

        return $product;
      }, $data);

      echo json_encode($data,JSON_PRETTY_PRINT);
      
      return;
    });

    $router->create('POST', '/products', function () {

      $productName = $_POST['name'] ?? null;
      $productPrice = $_POST['price'] ?? null;
      $userId = $_POST['id_user'] ?? null;

      $productName = trim($productName);
      $productPrice = trim($productPrice);
      $userId = trim($userId);

      if (!$productName || !$productPrice || !$userId) {
        echo json_encode([
          'erro' => 'invalid data'
        ]);

        return;
      };
      
      try {
        $query = 'INSERT INTO products (id, name, price, id_user) VALUES (null, :productName, :productPrice, :userId)';
        $stmt = $this->Connection->prepare($query);
        $stmt->bindParam(':productName', $productName, PDO::PARAM_STR);
        $stmt->bindParam(':productPrice', $productPrice, PDO::PARAM_INT);
        $stmt->bindParam(':userId', $userId, PDO::PARAM_INT);
  
        $stmt->execute();
  
        http_response_code(201);
        echo json_encode([
          'response' => 'Produto criado com sucessso'
        ]);
      }catch (Exception $e) {
        echo json_encode([
          'response' => 'Ocorreu algum erro',
          'erro' => $e->getMessage()
        ]);
      }

      return;

    });

    //SALES
    $router->create("GET", "/sales", function () {
      $query = 'SELECT * FROM sales';

      if (isset($_GET['id'])) {
        $query .= ' WHERE id = ' . $_GET['id'];
      }

      $stmt = $this->Connection->prepare($query);
      $stmt->execute();

      $data = [];
      while($dataFecth = $stmt->fetch()){
        $data[] = $dataFecth;
      };
      echo json_encode($data,JSON_PRETTY_PRINT);
      
      return;
    });

    $router->create('POST', '/sales', function () {

      $productId = $_POST['id_product'] ?? null;
      $userId = $_POST['id_user'] ?? null;

      $productId = trim($productId);
      $userId = trim($userId);

      if (!$productId || !$userId) {
        echo json_encode([
          'erro' => 'invalid data'
        ]);

        return;
      };
      
      try {
        $query = 'INSERT INTO sales (id, id_user, id_product, date_of_sale) VALUES (null, :productId, :userId, null)';
        $stmt = $this->Connection->prepare($query);
        $stmt->bindParam(':productId', $productId, PDO::PARAM_INT);
        $stmt->bindParam(':userId', $userId, PDO::PARAM_INT);
  
        $stmt->execute();
  
        http_response_code(201);
        echo json_encode([
          'response' => 'Produto criado com sucessso'
        ]);
      }catch (Exception $e) {
        echo json_encode([
          'response' => 'Ocorreu algum erro',
          'erro' => $e->getMessage()
        ]);
      }

      return;

    });
    
    $router->init();
  }
}
