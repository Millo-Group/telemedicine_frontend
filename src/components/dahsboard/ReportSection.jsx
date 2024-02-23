import FullScreenIcon from "../../assets/images/full-screen-icon.svg";
import XrayImg from "../../assets/images/x-ray.png";
import ReportPDF from '../../assets/pdf/bridges-forms-referral-letter.pdf'
const PatientReport = () => {
  return (
    <>
      <div classNameName="row ">
        <div class="accordion mb-20" id="accordionExampleTwo">
          <div className="accordion-item">
            <div class="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Reports 1
                </button>
                <div className="d-flex justify-content-center align-items-center">
                  <img src={FullScreenIcon} alt="fullscreen" />
                </div>
              </div>
            </div>
            <div
              id="collapseThree"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExampleTwo"
            >
              <div class="accordion-body">
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
                    <embed src={ReportPDF} width="100%" height="100%" />
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
    </>
  );
};
export default PatientReport;
