import PdfImg from "../../assets/images/pdf.png";
import DownloadSVG from "../../assets/images/download.svg"
const PatientReportFile = () => {
  const prescriptions = [
    { id: 1, name: "prescription.pdf" },
    { id: 2, name: "X-ray report.pdf" },
    { id: 3, name: "Checkup.pdf" },
    { id: 4, name: "Screening.pdf" },
  ];
  return (
    <div className="box box-body px35 bg-lightgray">
      <div className="d-flex flex-column">
        {prescriptions.map((prescription) => (
          <div
            className="d-flex  justify-content-between align-items-center mb-15"
            key={prescription.id}
          >
            <div>
              <img src={PdfImg} className="me-10 avatar-sm" alt="PdfImg" />
              {prescription.name}
            </div>
            <div className="dropdownd d-flex items-center">
              <div
                className="me-1 rounded d-flex me-2 p-1 justify-content-center align-items-center"
                style={{ backgroundColor: "#e4e6ef", cursor: "pointer" }}
              >
                <img
                  src={DownloadSVG}
                  className="avatar-sm"
                  style={{ width: "13px", height: "14px" }}
                  alt="PdfImg"
                />
              </div>
              <div className="dropdown d-flex align-items-center">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#6750A4", fontSize: "22px" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  more_vert
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className="dropdown-item d-flex align-items-center"
                      style={{ fontSize: "14px", fontWeight: "300" }}
                    >
                      <span
                        className="material-symbols-outlined me-1"
                        style={{ fontSize: "18px" }}
                      >
                        download
                      </span>
                      Details
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item d-flex align-items-center "
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                    >
                      <span
                        className="material-symbols-outlined me-1"
                        style={{ fontSize: "18px" }}
                      >
                        upload
                      </span>
                      Lab Reports
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  export default PatientReportFile;