import { ApiAiClient, IServerResponse } from "api-ai-javascript";
import { useState } from "react";

const client = new ApiAiClient({
  accessToken: process.env.REACT_APP_GOOGLE_ACCESS_TOKEN || "",
});

type Message = IncomingMessage | OutgoingMessage;

function useChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  /**
   * Abstract method to get message from gcp, update messages and
   * handle loading state
   * @param text
   * @returns {Promise<IServerResponse['result']>}
   */
  async function getResult(text: string): Promise<IServerResponse["result"]> {
    console.log(text);
    try {
      setLoading(true);
      setMessages((messages) => [
        ...messages,
        { message: text, from: "me", privateMessage: false, nick: "User" },
      ]);
      const response = await client.textRequest(text);
      console.log(response);
      setMessages((messages) => [
        ...messages,
        {
          message: response.result?.fulfillment?.speech || "",
          privateMessage: false,
        },
      ]);
      return response.result;
    } catch (error: any) {
      setMessages((messages) => [
        ...messages,
        { message: error.message || "", privateMessage: false },
      ]);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Set message to state and invoke get result
   * @param message
   */
  function handleSetMessage(message: string) {
    getResult(message);
  }

  return { messages, setMessage: handleSetMessage, loading };
}

export default useChatBot;
