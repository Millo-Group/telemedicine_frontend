import HumanAnotomyPicture from "../../assets/images/human-body.png";
import FullScreenIcon from "../../assets/images/full-screen-icon.svg";
const HumanBodyAccordian = () => {
  return (
    <>
      <div classNameName="row">
        <div class="accordion mb-20" id="accordionExampleOne">
          <div className="accordion-item">
            <div class="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Human Body
                </button>
                <div className="d-flex justify-content-center align-items-center" data-bs-toggle="modal" href="#Hmodalid" role="button"><img src={FullScreenIcon} /></div>
              </div>
            </div>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExampleOne"
            >
              <div class="accordion-body">
                <div className="text-center">
                  <img src={HumanAnotomyPicture} alt="pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="Hmodalid" aria-hidden="true" aria-labelledby="Hmodalid" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered m-0" style={{maxWidth:'100%'}}>
                <div className="modal-content" style={{height:'100vh'}}>
                <div class="accordion mb-20" id="accordionExampleOne">
          <div className="accordion-item">
            <div class="box-header with-border custom-space">
              <div className="d-flex gap-3 align-items-center">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Human Body
                </button>
                <div className="d-flex justify-content-center align-items-center">
                    <div type="" className="primary" data-bs-dismiss="modal" aria-label="Close"><img src={FullScreenIcon} /></div>
                </div>
              </div>
            </div>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExampleOne"
            >
              <div class="accordion-body">
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