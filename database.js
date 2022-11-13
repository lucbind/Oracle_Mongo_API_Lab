const { MongoClient } = require("mongodb")
//const uri = "mongodb://localhost:27017" //Per mongo
//const uri = "mongodb://username:password@localhost:27018/?authMechanism=PLAIN&authSource=external&retryWrites=false&loadBalanced=true&tls=true&tlsAllowInvalidCertificates=true" //PER ORACLE

//const uri = "mongodb://username:password@localhost:27018/?authMechanism=PLAIN&authSource=external&retryWrites=false&loadBalanced=true&tls=true&tlsAllowInvalidCertificates=true" //PER ORACLE

const uri = "mongodb://username:password@localhost:27018/?authMechanism=PLAIN&authSource=external&retryWrites=false&loadBalanced=true&tls=true&tlsAllowInvalidCertificates=true" //PER ORACLE


const opts = { useUnifiedTopology: true }

const connect = async () => {
	try {
		console.log("# Connecting to database server...")
		const client = await MongoClient.connect(uri, opts)
		console.log("# Connected")
		return client
	}
	catch(err) {
		console.error("# Database connection error")
		throw err
	}
}

module.exports = connect;
