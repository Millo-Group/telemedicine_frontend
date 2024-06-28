import { useState } from "react";
import { useApi } from "./useApi";

type Message = IncomingMessage | OutgoingMessage;

function useChatBot() {
  const api = useApi();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  /**
   * Abstract method to get message from gcp, update messages and
   * handle loading state
   * @param text
   */
  async function setResult(text: string) {
    setLoading(true);
    try {
      const payload = {
        queryInput: {
          text: text,
        },
      };
      const { data } = await api.post(`/google-intent`, payload);
      setMessages((messages) => [
        ...messages,
        {
          message: data?.text || "",
          privateMessage: false,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  /**
   * Set message to state and invoke get result
   * @param message
   */
  function handleSetMessage(message: string) {
    setMessages((messages) => [
      ...messages,
      { message: message, from: "me", privateMessage: false, nick: "User" },
    ]);
    setResult(message);
  }

  return { messages, setMessage: handleSetMessage, chatLoading: loading };
}

export default useChatBot;
