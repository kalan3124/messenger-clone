import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [inputs, setInputs] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setMessages(
          snapshot.docs.map(doc => (
            // console.log(doc.data())
            { id: doc.id, message: doc.data() }
          ))
        );
      });
  }, []);

  useEffect(() => {
    const name = prompt("Please Enter the your name");
    setUserName(name);
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    db.collection("messages").add({
      message: inputs,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMessages([
      ...messages,
      {
        username: username,
        message: inputs
      }
    ]);
    setInputs("");
  };

  console.log(messages);

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControll">
          <InputLabel>Enter the message...</InputLabel>
          <Input
            type="text"
            value={inputs}
            onChange={event => setInputs(event.target.value)}
            className="app_input"
          />
          <Button
            type="submit"
            onClick={sendMessage}
            disabled={!inputs}
            variant="contained"
            color="primary"
            className="app_iconButton"
          >
            Send
          </Button>
        </FormControl>
      </form>
      {messages.map(({ id, message }) => (
        <Message key={id} username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
