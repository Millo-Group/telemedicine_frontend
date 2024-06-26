import React from "react";
import styles from './index.module.css';

interface TabLinkProps {
  tab: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  label: string;
}

const TabLink: React.FC<TabLinkProps> = ({ tab, activeTab, setActiveTab, label }) => {
  const isActive = activeTab === tab;
  const navLinkClasses = `nav-link ${styles['nav-link']} ${isActive ? 'border-bottom border-top-0 border-end-0 border-start-0 border-primary text-primary' : 'text-muted'}`;

  return (
    <li className="nav-item mx-2">
      <a
        className={navLinkClasses}
        onClick={() => setActiveTab(tab)}
      >
        {label}
      </a>
    </li>
  );
};

export default TabLink;
