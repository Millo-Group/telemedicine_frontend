import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from './index.module.css'
import ChatInput from "../../../components/ChatInput";
const PatientDashboardView = () => {
  const { state } = useLocation();
  const { room = "" } = useParams();

  //   if (!state) return <div>State Not Available</div>;
  return (
    <div className={styles.root}>
      <div className="modal center-modal fade" id="modal-admit" >
        <div className="modal-dialog">
          <div className="modal-content modal-video-content">
            <div className="modal-body">
              <div className="text-center">
                <h5 className="mb-5">Someone wants to join this call</h5>
              </div>
              <div className="content-top-agile pt-10">
                <img src="../images/avatar/2.jpg" alt="User Image" className="rounded-circle" style={{ width: "50px" }} />
              </div>
              <div className="text-center">
                <h5 className="mb-5">Maical Doe</h5>
              </div>
            </div>
            <div className="modal-footer text-end">
              <a href="#" className="btn btn-danger btn-xs" data-bs-dismiss="modal" aria-label="Close">Deny Entry</a>
              <a href="patient-videocall.html" className="btn btn-success btn-xs">Admin</a>
            </div>
          </div>
        </div>
      </div>
      <div className="modal center-modal fade" id="modal-video">
	  <div className="modal-dialog">
		<div className="modal-content modal-video-content">
		  <a href="#" className="video-close text-primary" data-bs-dismiss="modal" aria-label="Close"><span className="material-symbols-outlined">cancel</span></a>	
		  <div className="modal-body video-body">
			<div className="video-fullscreen"><img src="../images/video-calling-img.png" className="img-fluid" alt=""/></div>
			<div className="video-call-btn">
				<a href="/patient-videocall/1" type="button" className="waves-effect waves-light btn btn-primary">Start Video Call</a>
			</div>
		  </div>
		  
		</div>
	  </div>
	</div>
      <h4>Hi, Ms. Lisa</h4>
      <p>How can I assist you Today ?</p>
      <div className=" justify-content-between align-items-center  p-5 overflow-hidden" style={{ margin: "auto", width: "100%" }}>
        <ChatInput placeholder="Tell something..." />
        <div className="pt-50">

          <div>
            <div className={styles.row}>
              <div>
                <h6>Preferred actions</h6>
              </div>
              <div>
                <div className={styles.pullRight}>
                  <span className="badge badge-pill badge-info">Health</span>
                </div>
              </div>
            </div>
            <div >
              <div className="row">
                <div className="col-12">
                  <table width="100%" className="menu-icon-btn">
                    <tbody>
                      <tr>
                        <td width="50%">
                          <div className="d-grid gap-2">
                            <button className="btn btn-primary dash-icon-menu btn-block p-15 rounded-4" type="button">
                              <div>
                                <span className="material-symbols-outlined">calendar_month</span>
                              </div>
                              <div>
                                Appointment
                              </div>
                            </button>
                          </div>
                        </td>
                        <td width="50%" >
                          <div className="d-grid gap-2">
                            <button className="btn btn-primary btn-outline  rounded-4 dash-icon-menu bg-white p-15" data-bs-toggle="modal" data-bs-target="#modal-video">
                              <div>
                                <span className="material-symbols-outlined">video_camera_front</span>
                              </div>
                              <div>
                                Check-In Tele-Med
                              </div>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <div className="d-grid gap-2">
                            <button className="btn btn-primary btn-outline rounded-4 dash-icon-menu bg-white p-15" type="button">
                              <div>
                                <span className="material-symbols-outlined">receipt_long</span>
                              </div>
                              <div>
                                Med-Record
                              </div>
                            </button>
                          </div>
                        </td>
                        <td width="50%">
                          <div className="d-grid gap-2">
                            <button className="btn btn-primary btn-outline  rounded-4 dash-icon-menu bg-white p-15" type="button">
                              <div>
                                <span className="material-symbols-outlined">warning</span>
                              </div>
                              <div>
                                Alert
                              </div>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="d-grid gap-2 p-3">
                <button
                  type="button"
                  className="btn btn-info btn-xs d-flex align-items-center justify-content-center"
                  style={{ padding: "0.375rem 0.75rem", fontSize: "0.75rem" }} // Adjust padding and font size
                  data-bs-toggle="modal"
                  data-bs-target="#modal-admit"
                >
                <div>
                <span className="material-symbols-outlined">
                    groups
                  </span>
                </div>
                <div>
                  <span>
                   1 Person waiting
                  </span>
                </div>

                </button>
              </div>

              <div className="p-1 fs-6">
                &copy; <script>document.write(new Date().getFullYear())</script> <a href="#">Infinity Clinic</a>. All Rights Reserved.
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientDashboardView;
