<?php

use Pusher\Pusher;

    require __DIR__ . '/vendor/autoload.php';
    require 'dotEnvConfig.php';

    $options = [
        'cluster' => $_ENV['PUSHER_CLUSTER'],    
    ];

    $pusher = new Pusher(
        $_ENV['PUSHER_KEY'],
        $_ENV['PUSHER_SECRET'],
        $_ENV['PUSHER_APP_ID'],
        $options
    );

    $data = [
        'id' => 02,
        'name' =>'daniel',
        'email' => 'daniel@gmail.com'
    ];

    $pusher->trigger('test-channel', 'test-event', $data)

    
?>