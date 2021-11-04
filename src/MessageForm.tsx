import { useState } from "react";
import Form from "@athena/forge/Form";
import Textarea from "@athena/forge/Textarea";
import FormField from "@athena/forge/FormField";
import Button from "@athena/forge/Button";
import { Message } from "./types";

interface MessageFormProps {
  onSubmit: (msg: Message) => Promise<void>;
}
const MessageForm = ({ onSubmit }: MessageFormProps) => {
  const [message, setMessage] = useState("");

  const sendMessage = (event: Event) => {
    event.preventDefault();
    const newMessage: Message = {
      message: message,
      // TODO logic for users
      senderId: 1,
      recipientId: 2,
      date: "5/2/2022",
    };
    onSubmit(newMessage);
    setMessage("");
  };

  return (
    <Form
      style={{ marginTop: "12px" }}
      buttonText="Send"
      includeSubmitButton={false}
      onSubmit={sendMessage}
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
  );
};

export default MessageForm;
