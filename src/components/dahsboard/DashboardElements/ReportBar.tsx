import { useState } from "react";
interface Props {
  // patientId: string;
}
const PatientReportBar: React.FC<Props> = ({ }) => {
  const [activeTab, setActiveTab] = useState('notes');
  const navLinkClasses = (tab: string) => `nav-link ${activeTab === tab ? 'border-bottom border-top-0 border-end-0 border-start-0  border-primary text-primary' : 'text-muted'}`;
  return (
    <>
  <div className="container d-flex flex-row justify-content-center align-items-center">
      <ul className="nav nav-tabs" style={{marginRight: "5rem"}}>
        <li className="nav-item mx-2">
          <a
            className={navLinkClasses('notes')}
            style={{ borderBottomWidth: activeTab === 'notes' ? '2px' : '1px', borderBottomColor: activeTab === 'notes' ? '#6f42c1' : 'transparent' }}
            onClick={() => setActiveTab('notes')}
          >
            Notes
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            className={navLinkClasses('referrals')}
            style={{ borderBottomWidth: activeTab === 'referrals' ? '2px' : '1px', borderBottomColor: activeTab === 'referrals' ? '#6f42c1' : 'transparent' }}
            onClick={() => setActiveTab('referrals')}
          >
            Referrals
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            className={navLinkClasses('labs')}
            style={{ borderBottomWidth: activeTab === 'labs' ? '2px' : '1px', borderBottomColor: activeTab === 'labs' ? '#6f42c1' : 'transparent' }}
            onClick={() => setActiveTab('labs')}
          >
            Labs
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            className={navLinkClasses('erx')}
            style={{ borderBottomWidth: activeTab === 'erx' ? '2px' : '1px', borderBottomColor: activeTab === 'erx' ? '#6f42c1' : 'transparent' }}
            onClick={() => setActiveTab('erx')}
          >
            eRX
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            className={navLinkClasses('images')}
            style={{ borderBottomWidth: activeTab === 'images' ? '2px' : '1px', borderBottomColor: activeTab === 'images' ? '#6f42c1' : 'transparent' }}
            onClick={() => setActiveTab('images')}
          >
            Images
          </a>
        </li>
      </ul>
    </div>

    </>
  );
};
export default PatientReportBar;
