import React, { useEffect, useState } from "react";
import XrayImg from "../../assets/images/x-ray.png"; // Adjust the path accordingly
import { useApi } from "../../hooks/useApi";
import styles from './index.module.css'
interface TabContentProps {
  patientId: string;
  type: string;
}

const TabContent: React.FC<TabContentProps> = ({ patientId, type }) => {
  const [reportsData, setReportsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const api = useApi();

  const getPatientIOTReports = async () => {
    try {
      setLoading(true)
      const { data } = await api.get(`reports?patient_id=${patientId}`);
      setReportsData(data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPatientIOTReports();
  }, []);

  return (
    <div className="tab-pane active">
      <div className="p-15">
        {
          loading ?
            <>
              <div className={styles.spinner}>
                <div role="status" className={`spinner-border`}>
                  <span className="sr-only"></span>
                </div>
              </div>
            </> :
            <>
              {reportsData?.map((el: any) => {
                if (el.type === type) {
                  return type === "IMAGE" ? (
                    <div className="text-center mb-3" key={el.file}>
                      <img src={XrayImg} alt="x-ray" />
                    </div>
                  ) : (
                    <embed src={el.file} height="100%" width="100%" key={el.file} />
                  );
                }
                return null;
              })}
            </>
        }
      </div>
    </div>
  );
};

export default TabContent;
