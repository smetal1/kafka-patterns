// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs")

// the client ID lets kafka know who's producing the messages
const clientId = "my-app"
// we can define the list of brokers in the cluster
const brokers = ["localhost:9092"]
// this is the topic to which we want to write messages
const topic = "message-log"
const kafka = new Kafka({ clientId, brokers })
const consumer = kafka.consumer({ groupId: clientId })

const consume = async (req,res) => {
	// first, we wait for the client to connect and subscribe to the given topic
	await consumer.connect()
	await consumer.subscribe({ topic })
	await consumer.run({
		// this function is called every time the consumer gets a new message
		eachMessage: ({ message }) => {
			// here, we just log the message to the standard output
			console.log(`received message: ${message.value}`)
		},
	})
}

module.exports = consume