const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://sachijayakody98:mongoDB735@cluster0.pyujbeu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function run() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}

module.exports = { client, run };
