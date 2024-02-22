import React, { useState } from "react";
import HumanPic from "../../assets/images/human-body.png";
import FullScreenIcon from "../../assets/images/full-screen-icon.svg";

const HumanBody = () => {
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
       <div className="accordion mb-20" id="accordionPanelsStayOpenExample">
        <div className="accordion-item shadow-sm rounded-3">
          <div
            className="accordion-header d-flex p-3 gap-3 border-bottom "
            id="headingOne"
          >
            <div
              className="accordion-button p-0 bg-transparent  shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBody"
              aria-expanded="true"
              aria-controls="collapseBody"
              style={{ color: "#172B4C", fontSize: "18px" }}
            >
              Human Body
            </div>
            <div className="d-flex" onClick={toggleFullScreen}>
              <img src={FullScreenIcon} alt="full screen" />
            </div>
          </div>
          <div
            id="collapseBody"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="box-body">
              <div className="text-center">
                <img src={HumanPic} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HumanBody;
