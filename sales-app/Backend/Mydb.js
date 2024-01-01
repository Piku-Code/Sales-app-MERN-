const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/myDB";

module.exports = {

    MongoClient.connect(url)
        .then((client) => {
            console.log("DB Connected!");
            client.close();
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err);
        });
}

