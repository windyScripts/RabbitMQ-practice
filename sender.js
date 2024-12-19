// aync await exchange

const amqp = require('amqplib'); // removed /callback_api

async function sendMessage(){
    try{
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        const exchange = 'logs';
        await channel.assertExchange(exchange, 'fanout', {durable: false});

        const message = 'Hello RabbitMQ with Fanout!';
        channel.publish(exchange,'',Buffer.from(message));

        console.log(" [x] Sent %s", message);

        setTimeout(() => {
            channel.close();
            connection.close();
        },500)
    }catch(err){
        console.log('Error:', err);
    }
}

sendMessage();