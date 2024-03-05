import FullScreenIcon from "../../assets/images/full-screen-icon.svg";
// import ReportPDF from '../../assets/pdf/bridges-forms-referral-letter.pdf'
import XrayImg from "../../assets/images/x-ray.png";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
interface Props {
  patientId: string;
}
const PatientReport: React.FC<Props> = ({ patientId }) => {
  let [reportsData, setReportsData] = useState<any>([]);
  const api = useApi();
  const getPatientIOTReports = async () => {
    try {
      let data = await api.get(`reports?patient_id=${patientId}`);
      setReportsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatientIOTReports();
  }, []);
  return (
    <>
      <div className="row ">
        <div className="accordion mb-20" id="accordionExampleTwo">
          <div className="accordion-item">
            <div className="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Reports 1
                </button>
                <a className="d-flex justify-content-center align-items-center" data-bs-toggle="modal" href="#reportmodal"  role="button"><img src={FullScreenIcon} /></a>
              </div>
            </div>
            <div
              id="collapseThree"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExampleTwo"
            >
              <div className="accordion-body">
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
                  <div
                    className="tab-pane active"
                    id="profile7"
                    role="tabpanel"
                  >
                    <div className="p-15">
                    {/* <embed src={ReportPDF} width="100%" height="100%" /> */}
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
                        <img src={XrayImg} alt="x-ray" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade p-0" id="reportmodal" aria-hidden="true" aria-labelledby="reportmodal" >
            <div className="modal-dialog modal-dialog-centered m-0" style={{maxWidth:'100%'}}>
                <div className="modal-content" style={{height:'100vh'}}>
                <div className="accordion mb-20" id="accordionExampleTwo">
          <div className="accordion-item">
            <div className="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Reports 1
                </button>
                <a className="primary d-flex justify-content-center align-items-center" href="#reportmodal" data-bs-dismiss="modal" aria-label="Close"><img src={FullScreenIcon} /></a>
              </div>
            </div>
            <div
              id="collapseThree"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExampleTwo"
            >
              <div className="accordion-body">
                <ul
                  className="nav nav-tabs customtab2 nav-fill mt-10"
                  role="tablist"
                >
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#report1"
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
                      href="#report2"
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
                      href="#report3"
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
                      href="#report4"
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
                  <div
                    className="tab-pane active"
                    id="report1"
                    role="tabpanel"
                  >
                    <div className="p-15">
                    {/* <embed src={ReportPDF} width="100%" height="100%" /> */}
                    </div>
                  </div>
                  <div className="tab-pane" id="report2" role="tabpanel">
                    <div className="p-15">Lab</div>
                  </div>
                  <div className="tab-pane" id="report3" role="tabpanel">
                    <div className="p-15">eRX</div>
                  </div>
                  <div className="tab-pane" id="report4" role="tabpanel">
                    <div className="p-15">
                      <div className="text-center">
                        <img src={XrayImg} alt="x-ray" />
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
export default PatientReport;