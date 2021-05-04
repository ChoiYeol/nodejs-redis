 

var redis = require('redis');
var subscriber = redis.createClient({ host: 'localhost', port: 6379});
var publisher = redis.createClient({ host: 'localhost', port: 6379});
var msg_count = 0;

publisher.publish('Goorm Channel', '발행자 첫번째 메시지');
publisher.publish('Goorm Channel', '발행자 두번째 메시지');
publisher.publish('Goorm Channel', '발행자 마지막 메시지');
 