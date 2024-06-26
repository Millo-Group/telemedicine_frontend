import React, { useEffect, useState } from "react";

import styles from './index.module.css';
import TabLink from "../../../Tablink";
import TabContent from "../../../TabContent";
import PatientInformationSection from "../../../MiddleSection/PatientInformationSection";
import { useApi } from "../../../../hooks/useApi";


interface Props {
  patientId: string;
}

const PatientReportBar: React.FC<Props> = ({ patientId }) => {
  const [activeTab, setActiveTab] = useState('notes');
  const api = useApi();


  return (
    <div className={styles.patientReportContainer}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <ul className="nav nav-tabs" style={{ marginRight: "5rem" }}>
          <TabLink tab="notes" activeTab={activeTab} setActiveTab={setActiveTab} label="Notes" />
          <TabLink tab="referrals" activeTab={activeTab} setActiveTab={setActiveTab} label="Referrals" />
          <TabLink tab="labs" activeTab={activeTab} setActiveTab={setActiveTab} label="Labs" />
          <TabLink tab="erx" activeTab={activeTab} setActiveTab={setActiveTab} label="eRX" />
          <TabLink tab="images" activeTab={activeTab} setActiveTab={setActiveTab} label="Images" />
        </ul>
      </div>
      <div className={styles.tabs}>
        <div className={styles.tabContent}>
          {activeTab === 'notes' && <>
            <PatientInformationSection
              patientId={patientId}
            />
          </>}
          {activeTab === 'referrals' && <TabContent patientId={patientId} type="REFERRALS" />}
          {activeTab === 'labs' && <TabContent patientId={patientId} type="LABS" />}
          {activeTab === 'erx' && <TabContent patientId={patientId} type="eRX" />}
          {activeTab === 'images' && <TabContent patientId={patientId} type="IMAGE" />}
        </div>
      </div>
    </div>
  );
};

export default PatientReportBar;
