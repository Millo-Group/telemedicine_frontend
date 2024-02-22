import { useState } from "react";
import Xray from "../../assets/images/x-ray.png";
import FullScreenIcon from "../../assets/images/full-screen-icon.svg";

const PatientReport = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      });
    }
  };
  return (
    <div className="accordion mb-20 " id="accordionPanelsStayOpenExample">
      <div className="accordion-item shadow-sm rounded-3">
        <div
          className="accordion-header d-flex p-3 gap-3 border-bottom "
          id="headingOne"
        >
          <div
            className="accordion-button p-0 bg-transparent  shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseReport"
            aria-expanded="true"
            aria-controls="collapseReport"
            style={{ color: "#172B4C", fontSize: "18px" }}
          >
            Reports1
          </div>
          <div className="d-flex" onClick={toggleFullScreen}>
            <img src={FullScreenIcon} alt="full screen" />
          </div>
        </div>
        <div
          id="collapseReport"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="box-body">
            <ul
              className="nav nav-tabs customtab2 nav-fill mt-10"
              role="tablist"
            >
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#profile7"
                  role="tab"
                >
                  <span className="hidden-sm-up">
                    <i className="ion-person"></i>
                  </span>{" "}
                  <span className="hidden-xs-down">Referrals</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#messages7"
                  role="tab"
                >
                  <span className="hidden-sm-up">
                    <i className="ion-email"></i>
                  </span>{" "}
                  <span className="hidden-xs-down">Labs</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#messages8"
                  role="tab"
                >
                  <span className="hidden-sm-up">
                    <i className="ion-email"></i>
                  </span>{" "}
                  <span className="hidden-xs-down">eRX</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#messages9"
                  role="tab"
                >
                  <span className="hidden-sm-up">
                    <i className="ion-email"></i>
                  </span>{" "}
                  <span className="hidden-xs-down">Images</span>
                </a>{" "}
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="profile7" role="tabpanel">
                <div className="p-15">
                  <iframe
                    src="../Icon/bridges-forms-referral-letter.pdf"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
              <div className="tab-pane" id="messages7" role="tabpanel">
                <div className="p-15">Lab</div>
              </div>
              <div className="tab-pane" id="messages8" role="tabpanel">
                <div className="p-15">eRX</div>
              </div>
              <div className="tab-pane" id="messages9" role="tabpanel">
                <div className="p-15">
                  <div className="text-center">
                    <img src={Xray} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatientReport;
