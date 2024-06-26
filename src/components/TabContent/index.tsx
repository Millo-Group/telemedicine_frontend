import React from "react";
import XrayImg from "../../assets/images/x-ray.png"; // Adjust the path accordingly

interface TabContentProps {
  data: any[];
  type: string;
}

const TabContent: React.FC<TabContentProps> = ({ data, type }) => {
  return (
    <div className="tab-pane active">
      <div className="p-15">
        {data?.map((el: any) => {
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
      </div>
    </div>
  );
};

export default TabContent;
