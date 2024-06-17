import { useLocation } from "react-router-dom";
import PatientMeeting from "../../../components/patient-meeting/Meeting";
import { useParams } from "react-router-dom";

const PatientVideoCallView = () => {
  const { state } = useLocation();
  const { room = "" } = useParams();

  // if (!state) return <div>State Not Available</div>;
  return <PatientMeeting roomName={room} jwt={"1"} />
};

export default PatientVideoCallView;
