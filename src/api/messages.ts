import { Message } from "../types";
import { BASE_URL } from "./const";

const MESSAGE_ENDPOINT = `${BASE_URL}/messages`;

export const getMessages = async (): Promise<Message[]> => {
  const res = await fetch(MESSAGE_ENDPOINT);
  if (!res.ok) throw res;
  return res.json();
};

export const sendMessage = async (message: Message): Promise<Message> => {
  const post: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  };

  const res = await fetch(MESSAGE_ENDPOINT, post);
  if (!res.ok) throw res;
  return res.json();
};

export default getMessages;
