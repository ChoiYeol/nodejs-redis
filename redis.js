 

var redis = require('redis');
var subscriber = redis.createClient({ host: 'localhost', port: 6379});
var publisher = redis.createClient({ host: 'localhost', port: 6379});
var msg_count = 0;

     // subscriber 객체가 구독을 시작할 때 발생하는 콜백 함수
     subscriber.on('subscribe', function (channel, count) {
     
     });

     // subscriber 객체가 메시지를 받으면 호출되는 함수
     subscriber.on('message', function (channel, message) {
         console.log('채널명: ' + channel + ', 메시지: ' + message);
         msg_count += 1;
 
     });

     // Goorm Channel의 구독을 시작
     subscriber.subscribe('Goorm Channel');