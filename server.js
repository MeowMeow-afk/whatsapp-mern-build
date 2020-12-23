// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import keys from "./config/keys.js";
import Cors from "cors";
// app config
const app = express();
const port = keys.port || 9000;

// middleware
app.use(express.json());
app.use(Cors());
// db config
const connectionURL = keys.connectionURL;

//pusher config config
// pusher is what make our mongodb realtime
const pusher = new Pusher({
  appId: "1127719",
  key: "c01b5b35e2881e2e4672",
  secret: "ebddf441cb7809fb9e00",
  cluster: "ap2",
  useTLS: true,
});

mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("open", () => {
  console.log("db connected");

  // Getting "messagecontents" collection out of database
  const messageCollections = db.collection("messagecontents");

  // Here we creating a changestream whos purpose is to watch any change that occur on our "messagecontents" collection
  const changeStream = messageCollections.watch();

  // adding an eventlistener which is "change" on our changeStream and saving the changes in a variable called change
  changeStream.on("change", (change) => {
    // this change variable is an object of the latest changed occured on our "messagecontents" collection
    console.log(change);
    if (change.operationType === "insert") {
      const insertedDocDetails = change.fullDocument;
      pusher.trigger("oninsert", "inserted", {
        name: insertedDocDetails.name,
        message: insertedDocDetails.message,
      });
    } else {
      console.log("Error triggering pusher");
    }
  });
});
// ??????

// api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => {
  console.log("port up and running on 9000");
});
