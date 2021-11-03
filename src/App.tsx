import { useState } from "react";
import Form from "@athena/forge/Form";
import Root from "@athena/forge/Root";
import Textarea from "@athena/forge/Textarea";
import FormField from "@athena/forge/FormField";
import Button from "@athena/forge/Button";
import Heading from "@athena/forge/Heading";
import ListItem from "@athena/forge/ListItem";

import "@athena/forge/dist/forge.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <Root>
      <Heading text="Chat" />

      {messages.map((msg, i) => (
        <ListItem key={msg + "i"}>{msg}</ListItem>
      ))}

      <Form
        style={{ marginTop: "12px" }}
        buttonText="Send"
        includeSubmitButton={false}
        onSubmit={(event) => {
          event.preventDefault();
          setMessages([...messages, message]);
          setMessage("");
        }}
      >
        <FormField
          id="message"
          labelAlwaysAbove
          labelText="Message"
          inputAs={Textarea}
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <Button type="submit" text="Send" disabled={!message} />
      </Form>
    </Root>
  );
};

export default App;
