import React, { useState } from "react";
import TabLink from "../../Tablink";

const PatientReportBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('notes');

  return (
    <div className="container d-flex flex-row justify-content-center align-items-center">
      <ul className="nav nav-tabs" style={{ marginRight: "5rem" }}>
        <TabLink tab="notes" activeTab={activeTab} setActiveTab={setActiveTab} label="Notes" />
        <TabLink tab="referrals" activeTab={activeTab} setActiveTab={setActiveTab} label="Referrals" />
        <TabLink tab="labs" activeTab={activeTab} setActiveTab={setActiveTab} label="Labs" />
        <TabLink tab="erx" activeTab={activeTab} setActiveTab={setActiveTab} label="eRX" />
        <TabLink tab="images" activeTab={activeTab} setActiveTab={setActiveTab} label="Images" />
      </ul>
    </div>
  );
};

export default PatientReportBar;
