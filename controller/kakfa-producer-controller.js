// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs")

// the client ID lets kafka know who's producing the messages
const clientId = "my-app"
// we can define the list of brokers in the cluster
const brokers = ["localhost:9092"]
// this is the topic to which we want to write messages
const topic = "message-log"

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers })
const producer = kafka.producer()

// we define an async function that writes a new message each second
const produce = async (req, res) => {
	await producer.connect()
	
		try {
			// send a message to the configured topic with
			// the key and value formed from the current value of `i`
			await producer.send({
				topic,
				messages: [
					{
						key: "ertc-iot",
						value: req.body.msg,
					},
				],
			})

			res.status(201).send({"status": "ok"})
            return;
           
            return;
		} catch (err) {
			console.error("could not write message " + err)
            res.status(400).send({"status": err})
            return;
		}
	
 
}

module.exports = produce