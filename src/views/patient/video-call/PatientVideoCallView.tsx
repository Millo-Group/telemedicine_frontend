import PatientMeeting from "../../../components/patient-meeting/Meeting";
import { useParams } from "react-router-dom";
import { useApp } from "../../../providers/AppProvider";

const PatientVideoCallView = () => {
  const { jitsi_token } = useApp();
  const { room = "" } = useParams();

  return <PatientMeeting roomName={room} jwt={jitsi_token} />
};

export default PatientVideoCallView;
