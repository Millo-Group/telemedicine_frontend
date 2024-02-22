import IOTReports from "../../components/dahsboard/Reports";
import HumanAccordian from "../../components/dahsboard/HumanAccrodion";
import Reports from "../../components/dahsboard/Report1";
const Dashboard = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="row">
            <div className="col-xxxl-3 col-xl-3 col-12"></div>
            <div className="col-xxxl-5 col-xl-5 col-12"></div>
            <div className="col-xxxl-4 col-xl-4 col-12">
              <IOTReports />
              <HumanAccordian />
              <Reports />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
