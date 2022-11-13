const { ObjectId } = require("mongodb")
//const dbName = "Lab_Workshop_Roma" //PER MONGO
//const coll = "names"  //PER MONGO
//const dbName = "appl1" //PER ORACLE
//const coll = "names"   //PER ORACLE

const dbName = "appl1" //PER ORACLE
const coll = "names"   //PER ORACLE

let db

module.exports = {

	getDb: async (client) => {
		db = await client.db(dbName)
	},

	getAllDocs: async () => {
		return await db.collection(coll).find().toArray()
	},
	
	addDoc: async (doc) => {
		return await db.collection(coll).insertOne(doc)
	},
	
	deleteDoc: async (id) => {
		const filter = { _id: new ObjectId(id) }
		return await db.collection(coll).deleteOne(filter)
	}
}
