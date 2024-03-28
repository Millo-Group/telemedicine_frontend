import Soapimg from "../../assets/images/soapimg.png";

interface props {
  eventDetails?: any;
}

const SoapTemplate: React.FC<props> = ({ eventDetails }) => {
  const { load_google_map } = eventDetails;

  const createIframeFromMap = () => {
    return { __html: load_google_map };
  };
  
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img style={{ width: "100%" }} src={Soapimg} alt="" />
        </div>
        <div className="col-8">
          <h4 className="fw-normal">Soap Note Template</h4>
          <p className="fst-normal">
            Leslie Grant / Dr. Julie Collier / 25 Jan 2019
          </p>
          <table className="table table-sm table-bordered text-center">
            <tbody>
              <tr>
                <td style={{ fontSize: "14px" }}>Inspection score</td>
                <td style={{ fontSize: "14px" }}>Flagged Items</td>
                <td style={{ fontSize: "14px" }}>Created actions</td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-outlined text-success">
                    leaderboard
                  </span>
                  0/0(0%)
                </td>
                <td>
                  <span className="material-symbols-outlined text-danger">
                    flag
                  </span>
                  0
                </td>
                <td>
                  <span className="material-symbols-outlined text-danger">
                    maps_ugc
                  </span>
                  0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div dangerouslySetInnerHTML={createIframeFromMap()} />
      </div>
    </>
  );
};

export default SoapTemplate;
