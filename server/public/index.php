<?php

use SimpleApi\Application;

require __DIR__ . '/../vendor/autoload.php';

require '../config/dotEnvConfig.php';
require '../config/conn.php';

$app = new Application($conn);

$app->start();


?>