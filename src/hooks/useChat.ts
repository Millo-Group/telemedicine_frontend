import { useContext } from "react";
import { ChatContext } from "../providers/ChatProvider";

function useChat() {
  const chatContext = useContext(ChatContext);
  return chatContext;
}
export default useChat;
