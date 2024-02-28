import IOTSection from "../../components/dahsboard/IOTSection";
import HumanAccordionSection from "../../components/dahsboard/HumanAccordionSection";
import ReportSection from "../../components/dahsboard/ReportSection";
import DoctorAppointments from "../../components/dahsboard/DoctorAppointments";
import MeetingRoom from "../../components/Room/join";
import useChat from "../../hooks/useChat";

const Dashboard = () => {
  const { currentAppointment } = useChat();

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
              {!!Object.keys(currentAppointment).length && <MeetingRoom />}
            </div>
            <div className="col-xxxl-5 col-xl-5 col-12"></div>
            {/* Reports */}
            <div className="col-xxxl-4 col-xl-4 col-12 p-0">
              <IOTSection patientId="30" />
              <HumanAccordionSection />
              <ReportSection patientId="30"  />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
