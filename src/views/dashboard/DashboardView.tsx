import IOTSection from "../../components/dahsboard/IOTSection";
import HumanAccordionSection from "../../components/dahsboard/HumanAccordionSection";
import ReportSection from "../../components/dahsboard/ReportSection";
import DoctorAppointments from "../../components/dahsboard/DoctorAppointments";
import MeetingRoom from "../../components/Room/join";
import PatientInformationSection from "../../components/MiddleSection/PatientInformationSection";
// import useChat from "../../hooks/useChat";
import { useLocation } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";

const Dashboard = () => {
  // const { currentAppointment } = useChat();
  const { state } = useLocation();
  let [patientId, setPatientId] = useState<any>([]);
  let [isLoading, setIsLoading] = useState<boolean>(true);
  const api = useApi();
  const getPatientID = async () => {
    try {
      let {
        data: { partner_ids },
      } = await api.get(`events/${state.event_id}`);
      let patient_id= partner_ids[1] ? partner_ids[1] : partner_ids[0]
      setPatientId(patient_id);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatientID();
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          {/* Casousal Section */}
          <div className="row">
            <div className="col-lg-12">
              <DoctorAppointments />
            </div>
          </div>
          {/* Main Section */}
          <div className="row">
            <div className="col-xxxl-3 col-xl-3 col-12 ">
              <MeetingRoom state={state} />
            </div>
            <div className="col-xxxl-5 col-xl-5 col-12">
              <PatientInformationSection state={state} />
            </div>
            {/* Reports */}
            {!isLoading && (
              <div className="col-xxxl-4 col-xl-4 col-12 p-0">
                <IOTSection patientId={patientId} />
                <HumanAccordionSection />
                <ReportSection patientId={patientId} />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
