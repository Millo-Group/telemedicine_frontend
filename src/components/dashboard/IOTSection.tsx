import FullScreenIcon from "../../assets/images/full-screen-icon.svg";
import {useApi} from "../../hooks/useApi";
import { useEffect, useState } from "react";
import TemperatureItem from "./DashboardElements/TemperatueItem";
import BPItem from "./DashboardElements/BPItem";
import PO2Item from "./DashboardElements/POItem";
import UnavailableItem from "./DashboardElements/UnavailableItem";
interface Props {
  patientId: string;
}

const IOTSection: React.FC<Props> = ({ patientId }) => {
  let [IOTData, setIOTData] = useState<any>([]);
  const api = useApi();
  const getPatientIOTReports = async () => {
    try {
      let { data } = await api.get<{
        patient_name: string;
        patient_id: number;
        type: string;
        id: string;
        timestamp: string;
        value: number;
      }>(`iot?patient_id=${patientId}`);
      console.log(data, "data");
      setIOTData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getPatientIOTReports();
    }, 600);
  }, []);
  return (
    <>
      <div className="row">
        <div className="accordion mb-20" id="accordionExample">
          <div className="accordion-item">
            <div className="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center ">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  IOT
                </button>
                <a
                  className="d-flex justify-content-center align-items-center"
                  data-bs-toggle="modal"
                  role="button"
                  href="#iotmodal"
                >
                  <img src={FullScreenIcon} alt="full-screen" />
                </a>
              </div>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="nav nav-tabs customtab2 nav-fill" role="tablist">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link active"
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
                      className="nav-link "
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
                  <div className="tab-pane active" id="home8" role="tabpanel">
                    {IOTData?.map((el: any) => {
                      if (el.type === "TEMPERATURE")
                        return <TemperatureItem temperature={el}/>;
                    })}
                    {
                      IOTData?.length == 0 && <UnavailableItem  heading="TEMPERATURE"/>
                      }
                  </div>
                  <div className="tab-pane " id="profile8" role="tabpanel">
                    <div className="p-15 ">
                      <h4 className="box-title margin-b-5 fs-16">Heart ECG</h4>
                      <canvas id="ecg" className="h-150 w-p100"></canvas>
                    </div>
                  </div>
                  <div className="tab-pane" id="messages15" role="tabpanel">
                    {IOTData?.map((el: any) => {
                      if (el.type === "BP") return <BPItem bp={el} />
                    })}
                     {
                      IOTData?.length == 0 && <UnavailableItem heading="BP"/>
                      }
                  </div>
                  <div className="tab-pane" id="messages16" role="tabpanel">
                    {IOTData?.map((el: any) => {
                      if (el.type === "PO2") return <PO2Item po2={el} />;
                    })}
                     {
                      IOTData?.length == 0 && <UnavailableItem heading="PO2"/>
                      }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade p-0"
          id="iotmodal"
          aria-hidden="true"
          aria-labelledby="iotmodal"
        >
          <div
            className="modal-dialog modal-dialog-centered m-0"
            style={{ maxWidth: "100%" }}
          >
            <div className="modal-content" style={{ height: "100vh" }}>
              <div className="accordion mb-20" id="accordionExample">
                <div className="accordion-item">
                  <div className="box-header with-border custom-space">
                    <div className="d-flex gap-3 align-items-center ">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        IOT
                      </button>
                      <div className="d-flex justify-content-center align-items-center">
                        <a
                          className="primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          href="#iotmodal"
                        >
                          <img src={FullScreenIcon} alt="full-screen" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul
                        className="nav nav-tabs customtab2 nav-fill"
                        role="tablist"
                      >
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link active"
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
                            className="nav-link "
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
                        <div
                          className="tab-pane active"
                          id="iot1"
                          role="tabpanel"
                        >
                          {IOTData?.map((el: any) => {
                            if (el.type === "TEMPERATURE")
                              return <TemperatureItem temperature={el} />;
                          })}
                        </div>
                        <div className="tab-pane " id="iot2" role="tabpanel">
                          <div className="p-15 ">
                            <h4 className="box-title margin-b-5 fs-16">
                              Heart ECG
                            </h4>
                            <canvas id="ecg" className="h-150 w-p100"></canvas>
                          </div>
                        </div>
                        <div className="tab-pane" id="iot3" role="tabpanel">
                          {IOTData?.map((el: any) => {
                            if (el.type === "BP") return <BPItem bp={el} />;
                          })}
                        </div>
                        <div className="tab-pane" id="iot4" role="tabpanel">
                          {IOTData?.map((el: any) => {
                            if (el.type === "PO2") return <PO2Item po2={el} />;
                          })}
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
