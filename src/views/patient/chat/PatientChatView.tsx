import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Chat from "../../../components/Chat";

const PatientChatView = () => {
  const { state } = useLocation();
  const { room = "" } = useParams();

//   if (!state) return <div>State Not Available</div>;
  return <Chat />
};

export default PatientChatView;
