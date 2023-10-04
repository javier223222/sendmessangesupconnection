const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        const cn = await mongoose.connect('mongodb+srv://223222:n5lQBLr9TPdpGl19@upconnectiom.fmeox5s.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
            
        });

        cn.STATES.connected
        ? console.log('MongoDB Conected')
        : console.log('Error in MongoDB');

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    connectDB
}
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://223222:n5lQBLr9TPdpGl19@upconnectiom.fmeox5s.mongodb.net/upconnectiom?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// const  run=async()=> {
//   try {
//     Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// module.exports={
//     run
// }
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
        
//         const cn = await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
          
//         });

//         cn.STATES.connected
//         ? console.log('MongoDB Conected')
//         : console.log('Error in MongoDB');

//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }

// module.exports = {
//     connectDB
// }
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://223222:n5lQBLr9TPdpGl19@upconnectiom.fmeox5s.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//     connectTimeoutMS: 90000,
//     poolSize: 10
//   }
// });
// async function run() {
//   try {
//     Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// module.exports={
//     run
// }