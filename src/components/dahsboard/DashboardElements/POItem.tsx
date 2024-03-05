import TemperatureImage from "../../../assets/images/check-2.png";
import moment from "moment";
interface Props {
  po2: any;
}
const PO2Item: React.FC<Props> = ({ po2 }) => {
  const formatDate = (date: string) => {
    return moment(date).utcOffset(date).format("DD MMM YYYY");
  };

  return (
    <>
      <div className="p-15 d-flex justify-content-between align-items-center">
        <div className="temp-tab">
          <h4 className="box-title margin-b-5 fs-16">PO2</h4>
          <p className="text-fade margin-b-5 fs-14">
            {" "}
            {formatDate(po2.timestamp)}
          </p>
          <p className="m-0 inblock fs-14">{po2.patient_name}</p>
        </div>
        <div className="box-controls pull-right">
          <span className="text-primary">{po2.value}.C</span>
          <div className="avatar avatar-xxl">
            <img src={TemperatureImage} alt="temperature" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PO2Item;
