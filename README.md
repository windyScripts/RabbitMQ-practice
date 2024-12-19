## Instructions to Run

docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq

run receiver

run sender in another terminal.

## Notes:

What is a rabbitmq exchange?
an **exchange** is a routing mechanism that decides how messages should be directed to queues. Exchanges act as intermediaries between producers (which send messages) and consumers (which receive messages).

is declaring a rabbit mq queue idempotent?
yes

What does this line mean? `docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq`
It exposes docker ports of the running image rabbitmq (at the end of the line) under the alias rabbitmq (after --name) with the port details of the form system_port:container_port. 5672 is the AMQP port. 15672 is the port for the RabbitMQ management UI.

What is AMQP?
Advanced Message Queuing Protocol, used by RabbitMQ for communication with clients.

What is a fanout exchange for rabbitMQ?
A **Fanout Exchange** in RabbitMQ is a type of exchange that routes messages to **all queues bound to it**, **regardless of the routing key**. In other words, a fanout exchange **broadcasts** the message to all queues, making it a very simple and efficient way to send the same message to multiple queues simultaneously.

What is the difference in rabbitMQ between queue and exchange?
a queue stores messages, while an exchange routes messages to queues

What are the four types of exchange that rabbitMQ has?
Direct, Topic, Fanout, and Headers

What is the difference between a header exchange and a direct exchange?
Headers exchanges can be looked upon as "direct exchanges on steroids". Because they route based on header values, they can be used as direct exchanges where the routing key does not have to be a string; it could be an integer or a hash (dictionary) for example.

What happens when you pass an empty string as the name of a queue?
the broker generates a name on behalf of the application.

What are bindings?
Bindings are rules that exchanges use (among other things) to route messages to queues.

What are the two acknowledge modes for consumers related to message delivery?
- After broker sends a message to an application (using either `basic.deliver` or `basic.get-ok` method).
- After the application sends back an acknowledgement (using the `basic.ack` method).

What are channels in rabbitMQ?
lightweight connections that share a single TCP connection

What is AMPQ 0-9-1?
It's a protocol supported by Rabbit MQ, shortened from Advanced Message Queuing Protocol.