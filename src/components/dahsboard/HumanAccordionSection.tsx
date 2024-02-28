import HumanAnotomyPicture from "../../assets/images/human-body.png";
import FullScreenIcon from "../../assets/images/full-screen-icon.svg";
const HumanBodyAccordian = () => {
  return (
    <>
      <div className="row">
        <div className="accordion mb-20" id="accordionExampleOne">
          <div className="accordion-item">
            <div className="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Human Body
                </button>
                <div
                  className="d-flex justify-content-center align-items-center"
                  data-bs-toggle="modal"
                  role="button"
                >
                  <img src={FullScreenIcon} alt="full-screen" />
                </div>
              </div>
            </div>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExampleOne"
            >
              <div className="accordion-body">
                <div className="text-center">
                  <img src={HumanAnotomyPicture} alt="pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Hmodalid"
          aria-hidden="true"
          aria-labelledby="Hmodalid"
        >
          <div
            className="modal-dialog modal-dialog-centered m-0"
            style={{ maxWidth: "100%" }}
          >
            <div className="modal-content" style={{ height: "100vh" }}>
              <div className="accordion mb-20" id="accordionExampleOne">
                <div className="accordion-item">
                  <div className="box-header with-border custom-space">
                    <div className="d-flex gap-3 align-items-center">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Human Body
                      </button>
                      <div className="d-flex justify-content-center align-items-center">
                        <div
                          className="primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <img src={FullScreenIcon} alt="full-screen" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExampleOne"
                  >
                    <div className="accordion-body">
                      <div className="text-center">
                        <img src={HumanAnotomyPicture} alt="pic" />
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
export default HumanBodyAccordian;
