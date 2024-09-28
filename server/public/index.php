<?php

use SimpleApi\Application;

require __DIR__ . '/../vendor/autoload.php';

$app = new Application();

$app->start();


require '../dotEnvConfig.php';
require '../config/conn.php';
?>