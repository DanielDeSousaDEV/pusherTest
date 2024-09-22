import 'https://js.pusher.com/8.2.0/pusher.min.js'

import {PUSHER_KEY, PUSHER_CLUSTER} from '../config/config.js'

console.log(PUSHER_CLUSTER, PUSHER_KEY);


Pusher.logToConsole = true

let pusher = new Pusher(PUSHER_KEY, {
    cluster: PUSHER_CLUSTER
})

var channel = pusher.subscribe('test-channel')
    
channel.bind('test-event', function(data) {
    alert(JSON.stringify(data, null, 2));
});