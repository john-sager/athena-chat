import { useEffect, useState } from "react";
import Root from "@athena/forge/Root";
import Heading from "@athena/forge/Heading";
import ListItem from "@athena/forge/ListItem";
import { getMessages, sendMessage } from "./api/messages";
import { Message } from "./types";
import MessageForm from "./MessageForm";

import "@athena/forge/dist/forge.css";

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function getInitialMessages() {
      const _messages = await getMessages();
      setMessages(_messages);
    }

    getInitialMessages();
  }, []);

  const handleSubmit = async (message: Message) => {
    const sentMessage = await sendMessage(message);
    setMessages([...messages, sentMessage]);
  };

  return (
    <Root>
      <Heading text="Chat" />

      {messages.map((msg, i) => (
        <ListItem key={msg.id}>{msg.message}</ListItem>
      ))}

      <MessageForm onSubmit={handleSubmit} />
    </Root>
  );
};

export default App;
