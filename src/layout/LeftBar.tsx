import { ArrowRight } from "react-feather";
import MakeAppointmentImg from "../assets/images/make-appoitment.svg";
import DashboardIcon from "../assets/images/dashboard.svg";
import AppoitmentIcon from "../assets/images/appoitment.svg";
import ReportsIcon from "../assets/images/reports.svg";
import PatientIcon from "../assets/images/patient.svg";
const LeftBar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="multinav">
            <div className="multinav-scroll" style={{ height: "100%" }}>
              <ul className="sidebar-menu" data-widget="tree">
                <li>
                  <a href="javascript:void(0)">
                    <img
                      src={DashboardIcon}
                      alt="settings"
                      className="me-20 w-22"
                    />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <img
                      src={AppoitmentIcon}
                      alt="settings"
                      className="me-20 w-22"
                    />
                    <span>Appointments</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <img
                      src={PatientIcon}
                      alt="settings"
                      className="me-20 w-22"
                    />
                    <span>Patients</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <img
                      src={ReportsIcon}
                      alt="settings"
                      className="me-20 w-22"
                    />
                    <span>Reports</span>
                  </a>
                </li>
              </ul>

              <div className="sidebar-widgets">
                <div className="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
                  <div className="text-center">
                    <img src={MakeAppointmentImg} className="sideimg " alt="" />
                    <h4 className="title-bx text-primary">
                      Make an Appointments
                    </h4>
                    <a
                      href="/"
                      className="py-10 fs-12 text-decoration-none mb-0 text-primary"
                    >
                      Best Helth Care here{" "}
                      <ArrowRight size={14} className="me-20" />
                    </a>
                  </div>
                </div>
                <div className="copyright text-center m-25">
                  <p className="fs-12">
                    <strong className="d-block">Infinity C</strong> ©{" "}
                    <script>document.write(new Date().getFullYear())</script>
                    {currentYear} All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default LeftBar;
