import IOTSection from "../../components/dashboard/IOTSection";
import HumanAccordionSection from "../../components/dashboard/HumanAccordionSection";
import MeetingRoom from "../../components/Room/join";
import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import PatientReportBar from "../../components/dahsboard/DashboardElements/PatientReportBar";
import { useApp } from "../../providers/AppProvider";


const Dashboard = () => {
  const { eventId, setCustomerId } = useApp();
  let [patientId, setPatientId] = useState<any>([]);
  let [isLoading, setIsLoading] = useState<boolean>(true);
  const api = useApi();
  const getPatientID = async () => {
    try {
      let {
        data: { partner_ids },
      } = await api.get(`events/${eventId}`);
      const patient_id = partner_ids[1] ? partner_ids[1] : partner_ids[0];
      setPatientId(patient_id)
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getPatientID();
    }, 300);
  }, []);
  return (
    <>
      <div className="content-wrapper">
        {!isLoading && (
          <section className="content">
            {/* Casousal Section */}
            {/* <div className="row">
                <div className="col-lg-12">
                  <DoctorAppointments />
                </div>
              </div> */}

            {/* Main Section */}
            <div className="row">
              <div className="col-xxxl-3 col-xl-3 col-12 ">
                <MeetingRoom />
              </div>
              {/* Reports */}

              <div className="col-xxxl-5 col-xl-5 col-12">
                {/* <PatientInformationSection
                  state={state}
                  patientId={patientId}
                /> */}
                <PatientReportBar patientId={patientId} />
              </div>

              <div className="col-xxxl-4 col-xl-4 col-12 p-0">
                <IOTSection patientId={patientId} />
                <HumanAccordionSection />
                {/* <ReportSection patientId={patientId} /> */}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Dashboard;
