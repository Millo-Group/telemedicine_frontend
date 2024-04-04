import Soapimg from "../../assets/images/soapimg.png";
import moment from "moment";
interface props {
  eventDetails?: any;
}

const SoapTemplate: React.FC<props> = ({ eventDetails }) => {
  const {
    load_google_map,
    display_name,
    practitioner_id,
    conducted_on,
    contact_address_inline,
  } = eventDetails;

  const createIframeFromMap = () => {
    return { __html: load_google_map };
  };
  const conductedDate = (date: string) => {
    const momentDate = moment.utc(date);
    const formattedDate = momentDate.format("DD MMM YYYY HH:mm");
    const timeZoneOffset = momentDate.utcOffset();
    const timeZone = `GMT${timeZoneOffset >= 0 ? "+" : "-"}${
      Math.abs(timeZoneOffset) / 60
    }`;
    return `${formattedDate} ${timeZone}`;
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
                  <div className="d-flex align-items-center justify-content-center gap-1">
                  <span className="material-symbols-outlined text-success">
                    leaderboard
                  </span>
                  0/0(0%)
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-1">
                  <span className="material-symbols-outlined text-danger">
                    flag
                  </span>
                  0
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-1">
                  <span className="material-symbols-outlined text-danger">
                    maps_ugc
                  </span>
                  0
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-4 ">
        <div
          className="col-4 px-2 d-flex justify-content-center flex-column"
          style={{ height: "64px", border: "1px solid #4d7bc9" }}
        >
          <span className="small">Patient name</span>
          <b style={{fontSize:'14px'}}>{display_name}</b>
        </div>
        <div
          className="col-4 px-2 d-flex justify-content-center flex-column"
          style={{ height: "64px", border: "1px solid #4d7bc9" }}
        >
          <span className="small">Assigned Healthcare Practitioner</span>
          <b style={{fontSize:'14px'}}>{practitioner_id&&practitioner_id[1]}</b>
        </div>
        <div
          className="col-4 px-2 d-flex justify-content-center flex-column"
          style={{ height: "64px", border: "1px solid #4d7bc9" }}
        >
          <span className="small">Conducted on</span>
          <div className="d-flex align-items-center">
          <span className="material-symbols-outlined text-primary">date_range</span>
          <b style={{fontSize:'14px'}}>{conductedDate(conducted_on)}</b>
          </div>
        </div>
        <div className="col-12 py-2" style={{ border: "1px solid #4d7bc9" }}>
          <div className="d-flex flex-column gap-2 small">
            <span>Location</span>
            <span>{contact_address_inline}</span>
          </div>
          <div dangerouslySetInnerHTML={createIframeFromMap()} />
        </div>
      </div>
    </>
  );
};

export default SoapTemplate;
