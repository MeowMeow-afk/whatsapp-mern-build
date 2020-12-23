import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Pusher from "pusher-js";
import axios from "axios";
function App() {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:9000/messages/sync");
        setMessage(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    var pusher = new Pusher("c01b5b35e2881e2e4672", {
      cluster: "ap2",
    });
    var channel = pusher.subscribe("oninsert");
    channel.bind("inserted", function (newmessage) {
      // alert(JSON.stringify(newmessage));
      setMessage([...messages, newmessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
