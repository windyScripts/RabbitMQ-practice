const amqp = require('amqplib');

async function receiveMessages(){
    try{
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        const exchange = 'logs';
        await channel.assertExchange(exchange, 'fanout', {durable: false});

        const queue = await channel.assertQueue('', {exclusive: true})
        console.log(`[*] Waiting for messages in ${queue.queue}.`)

        await channel.bindQueue(queue.queue, exchange, '');

        channel.consume(queue.queue, (msg) => {
            if(msg.content){
                console.log(" [x] Received %s", msg.content.toString());
            }
        },{noAck: true})
    }catch(err){
        console.log(err);
    }
}

receiveMessages();