const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        const useDBAuth = process.env.USE_DB_AUTH || false;
        if (useDBAuth) {
            connectionParams.user = process.env.MONGO_USERNAME;
            connectionParams.pass = process.env.MONGO_PASSWORD;
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_CONN_STR, connectionParams);
        console.log("Connected to database.");

        // Create a Todo model to ensure the collection is created
        const Todo = mongoose.model("Todo", new mongoose.Schema({ task: String }));

        // Insert a dummy document to create the `todo` database and collection
        // MongoDB will create the database and collection if they don't exist yet.
        await Todo.create({ task: "Initialize todo task" });

        console.log("Todo database and collection created if they didn't exist.");

    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
