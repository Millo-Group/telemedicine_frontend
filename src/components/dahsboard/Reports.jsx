import React, { useState } from "react";
import FullScreenIcon from "../../assets/images/full-screen-icon.svg";
import TemperatureImage from "../../assets/images/check-2.png";

const Reports = () => {
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
    <>
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
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
              style={{ color: "#172B4C", fontSize: "18px" }}
            >
              Reports
            </div>
            <div className="d-flex" onClick={toggleFullScreen}>
              <img src={FullScreenIcon} alt="full screen" />
            </div>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="box-body">
              <ul className="nav nav-tabs customtab2 nav-fill" role="tablist">
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link "
                    data-bs-toggle="tab"
                    href="#home8"
                    role="tab"
                    aria-selected="true"
                  >
                    <span className="material-symbols-outlined mds-24">
                      thermostat
                    </span>
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#profile8"
                    role="tab"
                    aria-selected="false"
                  >
                    <span className="material-symbols-outlined mds-24">
                      cardiology
                    </span>
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#messages15"
                    role="tab"
                  >
                    <span className="material-symbols-outlined mds-24">
                      blood_pressure
                    </span>
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#messages16"
                    role="tab"
                  >
                    <span className="material-symbols-outlined mds-24">
                      spo2
                    </span>
                  </a>{" "}
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane " id="home8" role="tabpanel">
                  <div className="p-15">
                    <div className="temp-tab">
                      <h4 className="box-title ">Temperature</h4>
                      <p className="text-fade ">31 Jan 2024</p>
                      <p className="m-0 inblock">Pateint. John Smith</p>
                    </div>
                    <div className="box-controls pull-right">
                      <span className="text-primary">35.C</span>
                      <div className="avatar avatar-xxl">
                        <img src={TemperatureImage} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane active" id="profile8" role="tabpanel">
                  <div className="p-15">
                    <h4 className="box-title ">Heart ECG</h4>
                    <canvas id="ecg" className="h-150 w-p100"></canvas>
                  </div>
                </div>
                <div className="tab-pane" id="messages15" role="tabpanel">
                  <div className="p-15">
                    <div className="temp-tab">
                      <h4 className="box-title ">Blood Pressure</h4>
                      <p className="text-fade ">31 Jan 2024</p>
                      <p className="m-0 inblock">Pateint. John Smith</p>
                    </div>
                    <div className="box-controls pull-right">
                      <span className="text-primary">35.C</span>
                      <div className="avatar avatar-xxl">
                        <img src="../images/check-1.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="messages16" role="tabpanel">
                  <div className="p-15">
                    <div className="temp-tab">
                      <h4 className="box-title ">PO2</h4>
                      <p className="text-fade ">31 Jan 2024</p>
                      <p className="m-0 inblock">Pateint. John Smith</p>
                    </div>
                    <div className="box-controls pull-right">
                      <span className="text-primary">35.C</span>
                      <div className="avatar avatar-xxl">
                        <img src="../images/check-2.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reports;
