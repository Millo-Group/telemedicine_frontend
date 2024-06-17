import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import TemperatureItem from "./DashboardElements/TemperatueItem";
import BPItem from "./DashboardElements/BPItem";
import PO2Item from "./DashboardElements/POItem";
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

  const navLinkClasses = (tab: string) => `nav-link ${activeTab === tab ? 'active' : ''}`;

  const [activeTab, setActiveTab] = useState('home8');

  return (
    <>
      <div className="row">
        <div className="mb-20 rounded">
          {/* <div className="box-header with-border custom-space p-3">
            <div className="d-flex gap-3 align-items-center">
              <h5>IOT</h5>
            </div>
          </div> */}
          <div>
            <div className="accordion-body">
              <ul className="nav nav-tabs customtab2 nav-fill" role="tablist">
                <li className="nav-item">
                  <a
                    className={navLinkClasses('home8')}
                    data-bs-toggle="tab"
                    href="#home8"
                    role="tab"
                    aria-selected="true"
                    style={{
                      backgroundColor: activeTab === 'home8' ? '#EDE5FF' : 'transparent'
                    }}
                    onClick={() => setActiveTab('home8')}
                  >
                    <span className="material-symbols-outlined mds-24" style={{ color: activeTab === 'home8' ? 'primary' : '#727274' }}>
                      thermostat
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={navLinkClasses('profile8')}
                    data-bs-toggle="tab"
                    href="#profile8"
                    role="tab"
                    aria-selected="false"
                    style={{
                      backgroundColor: activeTab === 'profile8' ? '#EDE5FF' : 'transparent'
                    }}
                    onClick={() => setActiveTab('profile8')}
                  >
                    <span className="material-symbols-outlined mds-24" style={{ color: activeTab === 'profile8' ? 'primary' : '#727274' }}>
                      cardiology
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={navLinkClasses('messages15')}
                    data-bs-toggle="tab"
                    href="#messages15"
                    role="tab"
                    style={{
                      backgroundColor: activeTab === 'messages15' ? '#EDE5FF' : 'transparent'
                    }}
                    onClick={() => setActiveTab('messages15')}
                  >
                    <span className="material-symbols-outlined mds-24" style={{ color: activeTab === 'messages15' ? 'primary' : '#727274' }}>
                      blood_pressure
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={navLinkClasses('messages16')}
                    data-bs-toggle="tab"
                    href="#messages16"
                    role="tab"
                    style={{
                      backgroundColor: activeTab === 'messages16' ? '#EDE5FF' : 'transparent'
                    }}
                    onClick={() => setActiveTab('messages16')}
                  >
                    <span className="material-symbols-outlined mds-24" style={{ color: activeTab === 'messages16' ? 'primary' : '#727274' }}>
                      spo2
                    </span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'home8' ? 'active' : ''}`} id="home8" role="tabpanel">
                  {IOTData?.map((el: any) => {
                    if (el.type === "TEMPERATURE")
                      return <TemperatureItem temperature={el} key={el.id} />;
                    return null;
                  })}
                </div>
                <div className={`tab-pane ${activeTab === 'profile8' ? 'active' : ''}`} id="profile8" role="tabpanel">
                  <div className="p-15">
                    <h4 className="box-title margin-b-5 fs-16">Heart ECG</h4>
                    <canvas id="ecg" className="h-150 w-p100"></canvas>
                  </div>
                </div>
                <div className={`tab-pane ${activeTab === 'messages15' ? 'active' : ''}`} id="messages15" role="tabpanel">
                  {IOTData?.map((el: any) => {
                    if (el.type === "BP")
                      return <BPItem bp={el} key={el.id} />;
                    return null;
                  })}
                </div>
                <div className={`tab-pane ${activeTab === 'messages16' ? 'active' : ''}`} id="messages16" role="tabpanel">
                  {IOTData?.map((el: any) => {
                    if (el.type === "PO2")
                      return <PO2Item po2={el} key={el.id} />;
                    return null;
                  })}
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
