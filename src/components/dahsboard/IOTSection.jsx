import FullScreenIcon from "../../assets/images/full-screen-icon.svg";
import TemperatureImage from "../../assets/images/check-2.png";

const IOTSection = () => {
  return (
    <>
      <div classNameName="row ">
        <div class="accordion mb-20" id="accordionExample">
          <div className="accordion-item">
            <div class="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center ">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  IOT
                </button>
                <div className="d-flex justify-content-center align-items-center" data-bs-toggle="modal" href="#iotmodal" role="button"><img src={FullScreenIcon} /></div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
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
                    <div className="p-15 d-flex justify-content-between align-items-center">
                      <div className="temp-tab">
                        <h4 className="box-title margin-b-5 fs-16">
                          Temperature
                        </h4>
                        <p className="text-fade margin-b-5 fs-12">
                          31 Jan 2024
                        </p>
                        <p className="m-0 inblock fs-12">Pateint. John Smith</p>
                      </div>
                      <div className="box-controls pull-right">
                        <span className="text-primary">35.C</span>
                        <div className="avatar avatar-xxl">
                          <img src={TemperatureImage} alt="temp"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane active"
                    id="profile8"
                    role="tabpanel"
                  >
                    <div className="p-15 ">
                      <h4 className="box-title margin-b-5 fs-16">Heart ECG</h4>
                      <canvas id="ecg" className="h-150 w-p100"></canvas>
                    </div>
                  </div>
                  <div className="tab-pane" id="messages15" role="tabpanel">
                    <div className="p-15 d-flex justify-content-between align-items-center">
                      <div className="temp-tab">
                        <h4 className="box-title margin-b-5 fs-16">
                          Blood Pressure
                        </h4>
                        <p className="text-fade margin-b-5 fs-14">
                          31 Jan 2024
                        </p>
                        <p className="m-0 inblock fs-14">Pateint. John Smith</p>
                      </div>
                      <div className="box-controls pull-right">
                        <span className="text-primary">35.C</span>
                        <div className="avatar avatar-xxl">
                          <img src={TemperatureImage} alt="temperature" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="messages16" role="tabpanel">
                    <div className="p-15 d-flex justify-content-between align-items-center">
                      <div className="temp-tab">
                        <h4 className="box-title margin-b-5 fs-16">PO2</h4>
                        <p className="text-fade margin-b-5 fs-14">
                          31 Jan 2024
                        </p>
                        <p className="m-0 inblock fs-14">Pateint. John Smith</p>
                      </div>
                      <div className="box-controls pull-right">
                        <span className="text-primary">35.C</span>
                        <div className="avatar avatar-xxl">
                          <img src={TemperatureImage} alt="temperature" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="iotmodal" aria-hidden="true" aria-labelledby="iotmodal" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered m-0" style={{maxWidth:'100%'}}>
                <div className="modal-content" style={{height:'100vh'}}>
                <div class="accordion mb-20" id="accordionExample">
          <div className="accordion-item">
            <div class="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center ">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  IOT
                </button>
                <div className="d-flex justify-content-center align-items-center">
                <div type="" className="primary" data-bs-dismiss="modal" aria-label="Close"><img src={FullScreenIcon} /></div>
                </div>
              </div>
            </div>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul className="nav nav-tabs customtab2 nav-fill" role="tablist">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link "
                      data-bs-toggle="tab"
                      href="#iot1"
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
                      href="#iot2"
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
                      href="#iot3"
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
                      href="#iot4"
                      role="tab"
                    >
                      <span className="material-symbols-outlined mds-24">
                        spo2
                      </span>
                    </a>{" "}
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane " id="iot1" role="tabpanel">
                    <div className="p-15 d-flex justify-content-between align-items-center">
                      <div className="temp-tab">
                        <h4 className="box-title margin-b-5 fs-16">
                          Temperature
                        </h4>
                        <p className="text-fade margin-b-5 fs-12">
                          31 Jan 2024
                        </p>
                        <p className="m-0 inblock fs-12">Pateint. John Smith</p>
                      </div>
                      <div className="box-controls pull-right">
                        <span className="text-primary">35.C</span>
                        <div className="avatar avatar-xxl">
                          <img src={TemperatureImage} alt="temp"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane active"
                    id="iot2"
                    role="tabpanel"
                  >
                    <div className="p-15 ">
                      <h4 className="box-title margin-b-5 fs-16">Heart ECG</h4>
                      <canvas id="ecg" className="h-150 w-p100"></canvas>
                    </div>
                  </div>
                  <div className="tab-pane" id="iot3" role="tabpanel">
                    <div className="p-15 d-flex justify-content-between align-items-center">
                      <div className="temp-tab">
                        <h4 className="box-title margin-b-5 fs-16">
                          Blood Pressure
                        </h4>
                        <p className="text-fade margin-b-5 fs-14">
                          31 Jan 2024
                        </p>
                        <p className="m-0 inblock fs-14">Pateint. John Smith</p>
                      </div>
                      <div className="box-controls pull-right">
                        <span className="text-primary">35.C</span>
                        <div className="avatar avatar-xxl">
                          <img src={TemperatureImage} alt="temperature" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="iot4" role="tabpanel">
                    <div className="p-15 d-flex justify-content-between align-items-center">
                      <div className="temp-tab">
                        <h4 className="box-title margin-b-5 fs-16">PO2</h4>
                        <p className="text-fade margin-b-5 fs-14">
                          31 Jan 2024
                        </p>
                        <p className="m-0 inblock fs-14">Pateint. John Smith</p>
                      </div>
                      <div className="box-controls pull-right">
                        <span className="text-primary">35.C</span>
                        <div className="avatar avatar-xxl">
                          <img src={TemperatureImage} alt="temperature" />
                        </div>
                      </div>
                    </div>
                  </div>
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
export default IOTSection;